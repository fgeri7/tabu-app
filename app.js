const $=s=>document.querySelector(s);
const screens=[...document.querySelectorAll(".screen")];
const show=id=>{
  screens.forEach(x=>x.classList.toggle("active",x.id===id));
  if(id==="home")renderResumeHome();
  if(id==="setup")renderSetupPlayers();
};
let timerId=null;
let touchStartY=0;

const RESUME_STORAGE_KEY="tabu_saved_games_v18";

const state={
  teams:["Kék csapat","Piros csapat"],
  players:[["Játékos 1","Játékos 2"],["Játékos 1","Játékos 2"]],
  scores:[0,0],
  cycles:2,
  duration:60,
  difficulty:"all",
  suddenDeath:true,
  gameChanger:false,
  sequence:[],
  pos:0,
  deck:[],
  card:null,
  recentCards:JSON.parse(localStorage.getItem("tabu_recent_cards_v13")||"[]"),
  sessionUsed:new Set(),
  undo:null,
  totalTurns:0,
  time:60,
  paused:false,
  gameStarted:false,
  pendingDice:"classic",
  turnStats:{correct:0,pass:0,tabu:0},
  turnCards:[],
  resumeGameId:null,
  resumeScreen:"game",
  diceShowing:false,
  teamPlayerIds:[[],[]],
  gameCardStats:{},
  statsRecorded:false,
  completedStatsGameId:null,
  roundEndSudden:false
};

let savedGames=[];
const PLAYERS_STORAGE_KEY="tabu_players_v20";
const STATS_STORAGE_KEY="tabu_stats_v20";
let playersDB=[];
let statsDB={games:[]};

function uid(prefix="id") {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
}

function loadPlayersAndStats(){
  try{ playersDB=JSON.parse(localStorage.getItem(PLAYERS_STORAGE_KEY)||"[]"); }catch(e){ playersDB=[]; }
  if(!Array.isArray(playersDB))playersDB=[];
  try{ statsDB=JSON.parse(localStorage.getItem(STATS_STORAGE_KEY)||'{"games":[]}'); }catch(e){ statsDB={games:[]}; }
  if(!statsDB||!Array.isArray(statsDB.games))statsDB={games:[]};
}
function persistPlayersAndStats(){
  try{ localStorage.setItem(PLAYERS_STORAGE_KEY,JSON.stringify(playersDB)); }catch(e){}
  try{ localStorage.setItem(STATS_STORAGE_KEY,JSON.stringify(statsDB)); }catch(e){}
}
function playerById(id){ return playersDB.find(p=>p.id===id); }
function canonicalPlayerIds(ids){
  return [...new Set(ids)].sort((a,b)=>{
    const pa=playerById(a),pb=playerById(b);
    return (pa?.createdAt||0)-(pb?.createdAt||0) || String(a).localeCompare(String(b));
  });
}
function canonicalTeamKey(ids){ return canonicalPlayerIds(ids).join("|"); }
function canonicalTeamLabel(ids, fallbackNames=[]){
  const canon=canonicalPlayerIds(ids);
  const names=canon.map(id=>playerById(id)?.name).filter(Boolean);
  if(names.length===canon.length)return names.join(" & ");
  return fallbackNames.length?fallbackNames.join(" & "):names.join(" & ");
}
function ensurePlayersFromLegacyNames(names){
  return (names||[]).map(name=>{
    let p=playersDB.find(x=>x.name.trim().toLowerCase()===String(name).trim().toLowerCase());
    if(!p){ p={id:uid("player"),name:String(name).trim(),createdAt:Date.now()+playersDB.length}; playersDB.push(p); }
    return p.id;
  });
}
function renderPlayerManagement(){
  const box=$("#playersList"); if(!box)return;
  if(!playersDB.length){
    box.innerHTML=`<div class="card empty-state"><h2>Még nincs mentett játékos</h2><p class="muted">Hozd létre a játékosokat, ezután az új játék indításakor legördülő menüből választhatjátok ki őket.</p></div>`;
    return;
  }
  const sorted=[...playersDB].sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
  box.innerHTML=sorted.map(p=>`<div class="managed-player"><input data-player-name="${p.id}" value="${escapeHtml(p.name)}" autocomplete="off"><button class="danger-outline player-delete" data-player-delete="${p.id}" title="Játékos törlése">🗑</button></div>`).join("");
}
function escapeHtml(v){ return String(v??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[m])); }
function addManagedPlayer(){
  const name=( $("#newPlayerName")?.value||"" ).trim();
  if(!name){ alert("Adj meg egy játékosnevet."); return; }
  if(playersDB.some(p=>p.name.trim().toLowerCase()===name.toLowerCase())){ alert("Ez a játékos már szerepel a listában."); return; }
  playersDB.push({id:uid("player"),name,createdAt:Date.now()});
  persistPlayersAndStats();
  $("#newPlayerName").value="";
  renderPlayerManagement();
  renderSetupPlayers();
}
function savePlayerName(id,name){
  const p=playerById(id); if(!p)return;
  name=String(name||"").trim();
  if(!name)return;
  const dup=playersDB.find(x=>x.id!==id&&x.name.trim().toLowerCase()===name.toLowerCase());
  if(dup){ alert("Ez a név már szerepel a játékosok között."); renderPlayerManagement(); return; }
  p.name=name; persistPlayersAndStats(); renderPlayerManagement(); renderSetupPlayers();
}
async function deleteManagedPlayer(id){
  const p=playerById(id); if(!p)return;
  const hasStats=statsDB.games.some(g=>(g.teams||[]).some(t=>(t.playerIds||[]).includes(id)));
  const msg=hasStats
    ?`${p.name} már szerepel korábbi statisztikákban. A játékos törlése a korábbi statisztikákat nem törli, de új játékba nem lesz választható. Folytatod?`
    :`Törlöd ${p.name} játékost a játékoslistából?`;
  if(!(await customConfirm(msg)))return;
  playersDB=playersDB.filter(x=>x.id!==id);
  persistPlayersAndStats(); renderPlayerManagement(); renderSetupPlayers();
}
function renderSetupPlayers(){
  const boxes=[$("#team1Players"),$("#team2Players")]; if(boxes.some(x=>!x))return;
  boxes.forEach((box,team)=>{
    const selected=[...box.querySelectorAll("select")].map(x=>x.value);
    // Új játék képernyőn alapból két játékoshely legyen csapatonként.
    while(selected.length<2) selected.push("");
    box.innerHTML="";
    selected.forEach((id,i)=>addSetupPlayerRow(team,id));
  });
  updateSetupPlayerOptions();
}
function addSetupPlayerRow(team,selectedId=""){
  const box=$("#team"+(team+1)+"Players"); if(!box)return;
  const row=document.createElement("div"); row.className="player-row";
  const select=document.createElement("select"); select.className="setup-player-select"; select.dataset.team=team;
  select.innerHTML=`<option value="">-- Játékos választása --</option>`+playersDB.map(p=>`<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("");
  select.value=selectedId;
  select.onchange=updateSetupPlayerOptions;
  const remove=document.createElement("button"); remove.type="button"; remove.className="remove-player"; remove.textContent="✕"; remove.setAttribute("aria-label","Játékos eltávolítása");
  remove.onclick=()=>{ if(box.children.length>1){row.remove();updateSetupPlayerOptions();} };
  row.append(select,remove); box.append(row);
}
function updateSetupPlayerOptions(){
  const selects=[...document.querySelectorAll(".setup-player-select")];
  const chosen=new Set(selects.map(s=>s.value).filter(Boolean));
  selects.forEach(sel=>{
    [...sel.options].forEach(opt=>{
      if(!opt.value){opt.disabled=false;return;}
      opt.disabled=chosen.has(opt.value)&&opt.value!==sel.value;
    });
  });
}
function getSelectedPlayers(team){
  return [...document.querySelectorAll(`#team${team+1}Players .setup-player-select`)].map(s=>s.value).filter(Boolean);
}
function validateSetupPlayers(){
  if(!playersDB.length){ alert("Először hozz létre legalább két játékost a Játékosok menüben."); show("players"); return false; }
  const ids=[...getSelectedPlayers(0),...getSelectedPlayers(1)];
  if(ids.length<2){ alert("Legalább két játékost válassz ki, egyet-egyet mindkét csapatba."); return false; }
  if(new Set(ids).size!==ids.length){ alert("Ugyanaz a játékos egy játékban csak egyszer szerepelhet."); return false; }
  if(!getSelectedPlayers(0).length||!getSelectedPlayers(1).length){ alert("Mindkét csapatba válassz legalább egy játékost."); return false; }
  return true;
}
function playerNamesFromIds(ids){ return ids.map(id=>playerById(id)?.name||"Játékos"); }


function cloneForStorage(value){
  return JSON.parse(JSON.stringify(value));
}

function loadSavedGames(){
  try{
    const raw=localStorage.getItem(RESUME_STORAGE_KEY);
    savedGames=raw?JSON.parse(raw):[];
    if(!Array.isArray(savedGames))savedGames=[];
  }catch(e){savedGames=[];}
}

function persistSavedGames(){
  try{
    localStorage.setItem(RESUME_STORAGE_KEY,JSON.stringify(savedGames));
  }catch(e){}
}

function currentResumeSnapshot(){
  return {
    teams:cloneForStorage(state.teams),
    players:cloneForStorage(state.players),
    scores:cloneForStorage(state.scores),
    cycles:state.cycles,
    duration:state.duration,
    difficulty:state.difficulty,
    suddenDeath:state.suddenDeath,
    gameChanger:state.gameChanger,
    sequence:cloneForStorage(state.sequence),
    pos:state.pos,
    deck:cloneForStorage(state.deck),
    card:cloneForStorage(state.card),
    recentCards:cloneForStorage(state.recentCards),
    sessionUsed:Array.from(state.sessionUsed||[]),
    totalTurns:state.totalTurns,
    time:state.time,
    paused:!!state.paused,
    gameStarted:true,
    pendingDice:state.pendingDice,
    diceShowing:!!state.diceShowing,
    teamPlayerIds:cloneForStorage(state.teamPlayerIds),
    gameCardStats:cloneForStorage(state.gameCardStats),
    statsRecorded:!!state.statsRecorded,
    completedStatsGameId:state.completedStatsGameId||null,
    turnStats:cloneForStorage(state.turnStats),
    turnCards:cloneForStorage(state.turnCards),
    undo:cloneForStorage(state.undo),
    screen:state.resumeScreen||"game"
  };
}

function persistCurrentGame(){
  if(!state.resumeGameId)return;
  const idx=savedGames.findIndex(g=>g.id===state.resumeGameId);
  const snap=currentResumeSnapshot();
  const entry={
    id:state.resumeGameId,
    createdAt:idx>=0?savedGames[idx].createdAt:Date.now(),
    updatedAt:Date.now(),
    snapshot:snap
  };
  if(idx>=0)savedGames[idx]=entry;
  else savedGames.unshift(entry);
  savedGames.sort((a,b)=>b.updatedAt-a.updatedAt);
  persistSavedGames();
}

function removeSavedGame(id){
  savedGames=savedGames.filter(g=>g.id!==id);
  persistSavedGames();
}

function resumeSavedGame(id){
  const entry=savedGames.find(g=>g.id===id);
  if(!entry||!entry.snapshot)return;
  const s=entry.snapshot;
  Object.keys(s).forEach(k=>{ if(k!=="sessionUsed"&&k!=="screen") state[k]=cloneForStorage(s[k]); });
  state.sessionUsed=new Set(s.sessionUsed||[]);
  state.teamPlayerIds=s.teamPlayerIds||[[],[]];
  state.gameCardStats=s.gameCardStats||{};
  state.statsRecorded=!!s.statsRecorded;
  state.completedStatsGameId=s.completedStatsGameId||null;
  if((!state.teamPlayerIds[0]?.length||!state.teamPlayerIds[1]?.length) && state.players?.length===2){
    state.teamPlayerIds=[ensurePlayersFromLegacyNames(state.players[0]),ensurePlayersFromLegacyNames(state.players[1])];
    persistPlayersAndStats();
  }
  state.resumeGameId=entry.id;
  state.resumeScreen=s.screen||"game";
  state.gameStarted=true;
  state.paused=true;
  state.diceShowing=!!s.diceShowing;
  $("#pauseOverlay")?.classList.add("hidden");
  $("#diceOverlay")?.classList.add("hidden");
  renderResumeHome();
  show(state.resumeScreen);
  if(state.resumeScreen==="game"){
    renderCurrentCard();
    update();
    updateGameUndo();
    if(state.diceShowing){
      showDiceBeforeTurn();
    }else{
      startTimerFromRemaining();
    }
  }else if(state.resumeScreen==="roundEnd"){
    renderRoundScores();
    showTurnEnd(false);
  }
}

async function deleteSavedGamePrompt(id){
  const entry=savedGames.find(g=>g.id===id);
  if(!entry)return;
  const s=entry.snapshot;
  const teamText=`${s.teams[0]} ${s.scores[0]} – ${s.scores[1]} ${s.teams[1]}`;
  if(!(await customConfirm(`Törlöd ezt a félbehagyott játékot?\n\n${teamText}\n\nEz nem vonható vissza.`)) )return;
  if(state.resumeGameId===id)state.resumeGameId=null;
  removeSavedGame(id);
  renderResumeHome();
}

function resumeGameSummary(entry){
  const s=entry.snapshot;
  const c=s.sequence?.[s.pos];
  const currentTurn=c?`${s.teams[c.team]} – ${s.players[c.team]?.[c.player]||"Játékos"} következik`:"";
  const screen=s.screen||"game";
  const where=screen==="roundEnd"?"Kör vége":currentTurn;
  return {score:`${s.teams[0]} ${s.scores[0]} – ${s.scores[1]} ${s.teams[1]}`,where};
}

function renderResumeHome(){
  const box=$("#unfinishedGames");
  if(!box)return;
  if(!savedGames.length){box.innerHTML="";return;}
  box.innerHTML=`<div class="resume-panel">
    <div class="resume-title">Félbehagyott játékok</div>
    ${savedGames.map(entry=>{
      const s=entry.snapshot, info=resumeGameSummary(entry);
      const date=new Date(entry.updatedAt||entry.createdAt).toLocaleString("hu-HU",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"});
      return `<div class="resume-game">
        <div class="resume-score">${info.score}</div>
        <div class="resume-meta">${info.where}<br>Utolsó mentés: ${date} · ${s.time!=null?`hátralévő idő: ${fmt(Math.max(0,s.time))}`:""}</div>
        <div class="resume-actions">
          <button class="primary" data-resume-id="${entry.id}">▶ Folytatás</button>
          <button class="resume-delete" data-delete-resume-id="${entry.id}" aria-label="Félbehagyott játék törlése">🗑</button>
        </div>
      </div>`;
    }).join("")}
  </div>`;
}

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function fmt(n){return String(n).padStart(2,"0")}
function feedback(){if($("#vibrate")?.checked&&navigator.vibrate)navigator.vibrate(100)}

function deckFor(){
  const filtered=TABU_CARDS.filter(c=>state.difficulty==="all"||c.difficulty===state.difficulty);
  const history=new Map(state.recentCards.map(x=>[x.id,x.last]));
  const now=Date.now();

  const pool=filtered.map(card=>({
    card,
    last:history.get(card.id)||0,
    age:history.has(card.id)?now-(history.get(card.id)||0):Number.MAX_SAFE_INTEGER
  }));

  // First rank by freshness, then shuffle within similar freshness.
  // This keeps old/unused cards preferred without creating predictable order.
  pool.sort((a,b)=>b.age-a.age);
  for(let i=0;i<pool.length;i++){
    const j=i+Math.floor(Math.random()*Math.max(1,Math.min(12,pool.length-i)));
    [pool[i],pool[j]]=[pool[j],pool[i]];
  }

  // Build category buckets and interleave them. The result is still randomized,
  // but prevents long runs of the same category.
  const buckets=new Map();
  for(const item of pool){
    const key=item.card.category||"Egyéb";
    if(!buckets.has(key))buckets.set(key,[]);
    buckets.get(key).push(item.card);
  }
  const categories=[...buckets.keys()];
  for(let i=categories.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [categories[i],categories[j]]=[categories[j],categories[i]];
  }

  const result=[];
  let lastCategory=null;
  while(result.length<pool.length){
    const available=categories.filter(cat=>buckets.get(cat)?.length && cat!==lastCategory);
    const candidates=available.length?available:categories.filter(cat=>buckets.get(cat)?.length);
    if(!candidates.length)break;
    const cat=candidates[Math.floor(Math.random()*candidates.length)];
    const bucket=buckets.get(cat);
    const idx=Math.floor(Math.random()*bucket.length);
    result.push(bucket.splice(idx,1)[0]);
    lastCategory=cat;
  }
  return result;
}
function rememberCard(card){
  if(!card?.id)return;
  state.sessionUsed.add(card.id);
  state.recentCards=state.recentCards.filter(x=>x.id!==card.id);
  state.recentCards.unshift({id:card.id,last:Date.now()});
  state.recentCards=state.recentCards.slice(0,TABU_CARDS.length);
  localStorage.setItem("tabu_recent_cards_v13",JSON.stringify(state.recentCards));
}

// A Tensionhez hasonló manuális újrakeverés: a játékban már kihúzott
// kártyák ismét visszakerülnek a használható pakliba. Az éppen látható
// kártyát szándékosan kihagyjuk, hogy ugyanaz a feladvány ne jelenhessen
// meg közvetlenül egymás után.
function reshuffleDeck(){
  const filtered=TABU_CARDS.filter(c=>state.difficulty==="all"||c.difficulty===state.difficulty);
  const currentId=state.card?.id||null;

  state.sessionUsed=new Set();
  state.recentCards=[];
  try{localStorage.removeItem("tabu_recent_cards_v13")}catch(e){}

  state.deck=shuffle(filtered.filter(c=>c.id!==currentId));
  // Az undo az előző pakliállapotot állítaná vissza, ezért újrakeverés után
  // tudatosan töröljük, hogy ne lehessen véletlenül visszavonni az új paklit.
  state.undo=null;
  updateGameUndo();
  persistCurrentGame();

  alert("A pakli újrakeverve. A korábban már kihúzott kártyák ismét játékba kerülhetnek.");
}

function addPlayer(team,selectedId=""){ addSetupPlayerRow(team,selectedId); updateSetupPlayerOptions(); }

/*
  A körök sorrendje:
  1. csapat 1. játékosa
  2. csapat 1. játékosa
  1. csapat 2. játékosa
  2. csapat 2. játékosa
  ... majd új forduló.
*/
function buildSequence(){
  const a=state.players[0];
  const b=state.players[1];
  const max=Math.max(a.length,b.length);
  state.sequence=[];

  for(let cycle=1;cycle<=state.cycles;cycle++){
    for(let i=0;i<max;i++){
      if(a[i])state.sequence.push({team:0,player:i,cycle});
      if(b[i])state.sequence.push({team:1,player:i,cycle});
    }

    // Eltérő csapatlétszámnál a kisebb csapat kap egy extra magyarázó-kört.
    if(a.length!==b.length){
      const shortTeam=a.length<b.length?0:1;
      const arr=state.players[shortTeam];
      state.sequence.push({
        team:shortTeam,
        player:(cycle-1)%arr.length,
        cycle,
        extra:true
      });
    }
  }
  state.totalTurns=state.sequence.length;
}

function current(){return state.sequence[state.pos]}

function fitTargetWord(){
  const el=$("#word");
  if(!el)return;

  el.style.fontSize="";
  el.style.whiteSpace="normal";
  el.style.overflowWrap="normal";
  el.style.wordBreak="normal";
  el.style.maxHeight="none";
  el.style.overflow="hidden";

  // Keep the normal/v1.3 visual size and shrink only as much as necessary.
  // The target must fit horizontally AND may use at most two lines.
  let size=42;
  const minSize=24;
  el.style.fontSize=size+"px";
  el.style.lineHeight="1.05";

  while(size>minSize){
    const lineHeight=size*1.05;
    const tooWide=el.scrollWidth>el.clientWidth+2;
    const tooTall=el.scrollHeight>lineHeight*2+3;

    if(!tooWide && !tooTall) break;

    size-=1;
    el.style.fontSize=size+"px";
  }

  el.style.maxHeight=`${size*1.05*2+4}px`;
}

function nextCard(){
  if(!state.deck.length)state.deck=deckFor();
  if(!state.deck.length)return;
  state.card=state.deck.shift();
  rememberCard(state.card);

  $("#category").textContent=state.card.category||"";
  $("#difficultyLabel").textContent=state.card.difficulty||"";
  $("#word").textContent=state.card.word;
  $("#word").style.fontSize="";
  $("#tabooList").innerHTML=state.card.taboo
    .map(x=>`<li>❌ ${x}</li>`).join("");
  requestAnimationFrame(fitTargetWord);
}

function update(){
  const c=current();
  if(!c)return;

  $("#score1").textContent=state.scores[0];
  $("#score2").textContent=state.scores[1];
  $("#roundLabel").textContent=`${c.cycle}. forduló`;
  $("#teamLabel").textContent=state.teams[c.team];

  if($("#playerLabel")){
    $("#playerLabel").textContent=
      `Magyaráz: ${state.players[c.team][c.player]}`;
  }

  const maxTime=state.pendingDice==="double"
    ?state.duration*2
    :state.duration;

  $("#timer").textContent=
    `${fmt(Math.floor(state.time/60))}:${fmt(state.time%60)}`;
  $("#timer").classList.toggle("warning",state.time<=10);
  $("#progressBar").style.width=
    `${Math.max(0,state.time/maxTime*100)}%`;
}

function startTimer(){
  clearInterval(timerId);

  state.time=state.pendingDice==="double"
    ?state.duration*2
    :state.duration;

  state.paused=false;
  state.diceShowing=false;
  state.resumeScreen="game";
  update();
  persistCurrentGame();

  timerId=setInterval(()=>{
    if(state.paused)return;

    state.time--;
    update();
    persistCurrentGame();

    if(state.time<=0)endTurn();
  },1000);
}

function startTimerFromRemaining(){
  clearInterval(timerId);
  state.paused=false;
  state.diceShowing=false;
  state.resumeScreen="game";
  update();
  persistCurrentGame();

  timerId=setInterval(()=>{
    if(state.paused)return;
    state.time--;
    update();
    persistCurrentGame();
    if(state.time<=0)endTurn();
  },1000);
}

function startGame(){
  state.teams=[
    $("#team1").value.trim()||"Kék csapat",
    $("#team2").value.trim()||"Piros csapat"
  ];

  if(!validateSetupPlayers())return;
  state.teamPlayerIds=[getSelectedPlayers(0),getSelectedPlayers(1)];
  state.players=[playerNamesFromIds(state.teamPlayerIds[0]),playerNamesFromIds(state.teamPlayerIds[1])];

  state.cycles=+$("#cycles").value;
  state.duration=+$("#duration").value;
  state.difficulty=$("#difficulty").value;
  state.suddenDeath=$("#suddenDeath").checked;
  state.gameChanger=$("#gameChanger").checked;
  // Az előző játék/kör kockaeredménye nem öröklődhet át.
  state.pendingDice="classic";

  state.scores=[0,0];
  state.pos=0;
  state.sessionUsed=new Set();
  state.deck=[];
  state.gameStarted=true;
  state.paused=false;
  state.turnStats={correct:0,pass:0,tabu:0};
  state.turnCards=[];
  state.gameCardStats={};
  state.teamPlayerIds=state.teamPlayerIds||[[],[]];
  state.statsRecorded=false;
  state.completedStatsGameId=null;
  state.resumeGameId=uid();
  state.resumeScreen="game";
  state.diceShowing=false;

  buildSequence();
  show("game");
  nextCard();

  if(state.gameChanger)showDiceBeforeTurn();
  else startTimer();
  persistCurrentGame();
}

function showDiceBeforeTurn(){
  state.diceShowing=true;
  state.resumeScreen="game";
  state.pendingDice=
    shuffle(["single","double","statue","all","classic"])[0];

  const data={
    single:["👤","EGY KITALÁLÓ!",
      "Ebben a körben csak egy kijelölt csapattárs tippelhet."],
    double:["⏱️","DUPLA IDŐ!",
      "Ebben a körben kétszer annyi idő áll rendelkezésre."],
    statue:["🗿","SZOBOR!",
      "A magyarázó nem gesztikulálhat."],
    all:["🌐","MINDENKI JÁTSZIK!",
      "Mindkét csapat tippelhet."],
    classic:["🎯","KLASSZIKUS JÁTÉK",
      "Nincs külön módosítás."]
  }[state.pendingDice];

  $("#diceIcon").textContent=data[0];
  $("#diceTitle").textContent=data[1];
  $("#diceDescription").textContent=data[2];
  $("#diceOverlay").classList.remove("hidden");
  persistCurrentGame();
}

$("#diceContinueBtn").onclick=()=>{
  $("#diceOverlay").classList.add("hidden");
  state.diceShowing=false;
  startTimer();
};

function endTurn(){
  clearInterval(timerId);
  timerId=null;

  if(state.pos+1<state.sequence.length){
    state.resumeScreen="roundEnd";
    state.paused=true;
    persistCurrentGame();
    showTurnEnd(false);
    return;
  }

  if(state.scores[0]===state.scores[1]&&state.suddenDeath){
    buildSuddenDeath();
    state.resumeScreen="roundEnd";
    state.paused=true;
    persistCurrentGame();
    showTurnEnd(true);
    return;
  }

  endGame();
}

function buildSuddenDeath(){
  const a=state.players[0];
  const b=state.players[1];
  const max=Math.max(a.length,b.length);

  state.sequence=[];

  for(let i=0;i<max;i++){
    if(a[i])state.sequence.push({
      team:0,player:i,cycle:"⚡"
    });
    if(b[i])state.sequence.push({
      team:1,player:i,cycle:"⚡"
    });
  }

  state.pos=0;
}


function outcomeLabel(kind){
  return kind==="correct"
    ?["✅","Eltalálás","correct"]
    :kind==="pass"
      ?["⏭️","Passz","pass"]
      :["🚨","TABU","tabu"];
}

function renderRoundCards(){
  const box=$("#roundCardsList");
  if(!box)return;

  if(!state.turnCards.length){
    box.innerHTML=`<div class="card empty-round-cards">
      <h2>Ebben a körben nem volt értékelt kártya.</h2>
      <p>A kör idő lejárt, mielőtt egy feladványt értékeltetek volna.</p>
    </div>`;
    return;
  }

  box.innerHTML=state.turnCards.map((entry,i)=>{
    const [icon,label,cls]=outcomeLabel(entry.outcome);
    const c=entry.card;
    return `<article class="card review-card">
      <div class="review-top">
        <span class="review-number">#${i+1}</span>
        <span class="review-outcome ${cls}">${icon} ${label}</span>
      </div>
      <div class="review-category">${c.category||""}</div>
      <div class="review-word">${c.word}</div>
      <div class="review-label">Tiltott szavak</div>
      <div class="review-taboo">${(c.taboo||[]).map(x=>`<span>❌ ${x}</span>`).join("")}</div>
    </article>`;
  }).join("");
}

function openRoundCards(){
  renderRoundCards();
  show("roundCards");
}

function showTurnEnd(sudden){
  const normalTotal=state.sequence.filter(x=>x.cycle!=="⚡").length;
  const completed=Math.min(state.pos+1,normalTotal);
  const remaining=Math.max(0,normalTotal-completed);
  const next=state.sequence[state.pos+1];
  let leadText="Döntetlen az állás.";

  if(next){
    const nextTeam=next.team;
    const otherTeam=1-nextTeam;
    const diff=state.scores[nextTeam]-state.scores[otherTeam];

    if(diff>0){
      leadText=`A következő csapat <strong>${diff} ponttal vezet.</strong>`;
    }else if(diff<0){
      leadText=`A következő csapatnak legalább <strong>${Math.abs(diff)+1} pont</strong> kell a vezetés átvételéhez.`;
    }
  }else if(state.scores[0]!==state.scores[1]){
    const leader=state.scores[0]>state.scores[1]?0:1;
    leadText=`${state.teams[leader]} <strong>${Math.abs(state.scores[0]-state.scores[1])} ponttal vezet.</strong>`;
  }

  state.roundEndSudden=!!sudden;
  $("#roundEndTitle").textContent=sudden?"Döntetlen – hirtelen halál!":"Kör vége";
  $("#roundStats").innerHTML=
    `<strong>Az állás: ${state.teams[0]} ${state.scores[0]} – ${state.scores[1]} ${state.teams[1]}</strong><br>`+
    leadText+
    `<br><small>${sudden?"Hirtelen halál – mindkét csapatnak játszania kell.":`Játékos-körök: ${completed}/${normalTotal} · ${remaining} van hátra.`}</small>`+
    (next?`<br><strong>${state.teams[next.team]} – ${state.players[next.team][next.player]} következik.</strong>`:"");

  renderRoundScores();
  $("#nextRoundBtn").textContent=next
    ?`${state.teams[next.team]} – ${state.players[next.team][next.player]} következik →`
    :"Játék vége →";
  show("roundEnd");
}

function continueAfterTurn(){
  state.turnStats={correct:0,pass:0,tabu:0};
  state.turnCards=[];
  state.gameCardStats={};
  state.teamPlayerIds=state.teamPlayerIds||[[],[]];
  state.statsRecorded=false;
  state.resumeScreen="game";
  state.diceShowing=false;

  // Hirtelen halálban csak akkor döntünk, amikor mindkét csapat játszott.
  if(current()?.cycle==="⚡"&&state.pos%2===1){
    if(state.scores[0]!==state.scores[1]){
      endGame();
      return;
    }

    buildSuddenDeath();
    show("game");
    nextCard();
    if(state.gameChanger)showDiceBeforeTurn();
    else { state.pendingDice="classic"; startTimer(); }
    persistCurrentGame();
    return;
  }

  if(state.pos+1>=state.sequence.length){
    endGame();
    return;
  }

  state.pos++;
  show("game");
  nextCard();

  if(state.gameChanger)showDiceBeforeTurn();
  else startTimer();
  persistCurrentGame();
}

// Pontozási műveletek. A swipe és a gombok ugyanazokat a funkciókat hívják.
function awardCorrect(){
  const c=current();
  if(!c)return;
  state.scores[c.team]++;
  state.turnStats.correct++;
  feedback();
  nextCard();
  update();
}

function awardOpponent(reason){
  const c=current();
  if(!c)return;
  state.scores[1-c.team]++;
  state.turnStats[reason]++;
  feedback();
  nextCard();
  update();
}

// Gombok
function scoreAction(kind){
  const c=current();
  if(!c||!state.card)return;
  state.undo={
    scores:[...state.scores],
    turnStats:{...state.turnStats},
    turnCards:[...state.turnCards],
    card:state.card,
    deck:[...state.deck],
    gameCardStats:cloneForStorage(state.gameCardStats),
    recentCards:cloneForStorage(state.recentCards),
    sessionUsed:[...state.sessionUsed]
  };
  updateGameUndo();
  if(kind==="correct"){state.scores[c.team]++;state.turnStats.correct++}
  else {state.scores[1-c.team]++;state.turnStats[kind] }
  const pid=state.teamPlayerIds?.[c.team]?.[c.player];
  if(pid){ state.gameCardStats[pid]=state.gameCardStats[pid]||{correct:0,pass:0,tabu:0}; state.gameCardStats[pid][kind]++; }

  state.turnCards.push({
    card:{...state.card, taboo:[...(state.card.taboo||[])]},
    outcome:kind,
    team:c.team,
    player:c.player
  });

  feedback();
  const cardEl=$("#game .tabu-card");
  setTimeout(()=>{
    if(cardEl){cardEl.style.transition="none";cardEl.style.transform="translate3d(0,0,0)";cardEl.style.opacity="1";}
    nextCard();
    update();
    updateGameUndo();
    persistCurrentGame();
  },140);
}
$("#correctBtn").onclick=()=>scoreAction("correct");
$("#passBtn").onclick=()=>scoreAction("pass");
$("#tabooBtn").onclick=()=>scoreAction("tabu");

function renderCurrentCard(){
  if(!state.card)return;
  $("#category").textContent=state.card.category||"";
  $("#difficultyLabel").textContent=state.card.difficulty||"";
  $("#word").textContent=state.card.word;
  $("#word").style.fontSize="";
  $("#tabooList").innerHTML=state.card.taboo.map(x=>`<li>❌ ${x}</li>`).join("");
  requestAnimationFrame(fitTargetWord);
}
function updateGameUndo(){
  const b=$("#gameUndoBtn");
  if(b)b.disabled=!state.undo;
}
function undoAction(){
  if(!state.undo)return;
  state.scores=[...state.undo.scores];
  state.turnStats={...state.undo.turnStats};
  state.turnCards=[...state.undo.turnCards];
  state.card=state.undo.card;
  state.deck=[...state.undo.deck];
  state.gameCardStats=cloneForStorage(state.undo.gameCardStats||{});
  if(Array.isArray(state.undo.recentCards)){
    state.recentCards=cloneForStorage(state.undo.recentCards);
    try{localStorage.setItem("tabu_recent_cards_v13",JSON.stringify(state.recentCards));}catch(e){}
  }
  state.sessionUsed=new Set(state.undo.sessionUsed||[]);
  state.undo=null;
  renderCurrentCard();
  update();
  updateGameUndo();
  state.resumeScreen="game";
  persistCurrentGame();
}

function pauseGame(){
  if(!state.gameStarted||timerId===null)return;
  state.paused=true;
  state.resumeScreen="game";
  persistCurrentGame();
  $("#pauseOverlay").classList.remove("hidden");
}

function resumeGame(){
  state.paused=false;
  $("#pauseOverlay").classList.add("hidden");
  state.resumeScreen="game";
  persistCurrentGame();
  update();
}

function goHome(){
  if(state.gameStarted){
    state.paused=true;
    state.resumeScreen="game";
    persistCurrentGame();
  }
  clearInterval(timerId);
  timerId=null;
  state.gameStarted=false;
  state.paused=false;
  state.diceShowing=false;
  $("#pauseOverlay").classList.add("hidden");
  $("#diceOverlay").classList.add("hidden");
  show("home");
}

$("#gameMenuBtn").onclick=pauseGame;
$("#resumeBtn").onclick=resumeGame;
$("#pauseHomeBtn").onclick=goHome;
$("#pauseEndBtn").onclick=goHome;


function renderRoundScores(){
  if($("#roundScoreEdit1"))$("#roundScoreEdit1").textContent=state.scores[0];
  if($("#roundScoreEdit2"))$("#roundScoreEdit2").textContent=state.scores[1];
  if($("#roundScoreTeam1"))$("#roundScoreTeam1").textContent=state.teams[0];
  if($("#roundScoreTeam2"))$("#roundScoreTeam2").textContent=state.teams[1];
}
function changeRoundScore(team,delta){
  state.scores[team]=Math.max(0,state.scores[team]+delta);
  renderRoundScores();
  update();
  persistCurrentGame();
  // Refresh the round summary text so the lead requirement remains accurate.
  const sudden=state.roundEndSudden===true;
  showTurnEnd(sudden);
}

function renderManualScores(){
  $("#scoreEdit1").textContent=state.scores[0];
  $("#scoreEdit2").textContent=state.scores[1];
  $("#scoreEditTeam1").textContent=state.teams[0];
  $("#scoreEditTeam2").textContent=state.teams[1];
  $("#pauseScore1").textContent=state.scores[0];
  $("#pauseScore2").textContent=state.scores[1];
  $("#pauseScoreTeam1").textContent=state.teams[0];
  $("#pauseScoreTeam2").textContent=state.teams[1];
}
function changeScore(team,delta){
  state.scores[team]=Math.max(0,state.scores[team]+delta);
  renderManualScores();
  update();
  if(state.gameStarted===false && state.statsRecorded)recordCompletedGameStats();
  persistCurrentGame();
  if($("#gameEnd")?.classList.contains("active")){
    const[a,b]=state.scores; $("#winner").textContent=a===b?"Döntetlen!":`${a>b?state.teams[0]:state.teams[1]} nyert!`;
    $("#finalScores").innerHTML=`<div>🔵 ${state.teams[0]}: ${a}</div><div>🔴 ${state.teams[1]}: ${b}</div>`;
  }
}

function recordCompletedGameStats(){
  const teamIds=state.teamPlayerIds||[[],[]];
  if(!teamIds[0]?.length||!teamIds[1]?.length)return;
  const record={
    id:state.completedStatsGameId||state.resumeGameId||uid("game"),
    teams:[
      {playerIds:canonicalPlayerIds(teamIds[0]),name:canonicalTeamLabel(teamIds[0],state.players[0]),score:state.scores[0]},
      {playerIds:canonicalPlayerIds(teamIds[1]),name:canonicalTeamLabel(teamIds[1],state.players[1]),score:state.scores[1]}
    ],
    playerActions:cloneForStorage(state.gameCardStats||{}),
    playerNames:Object.fromEntries((teamIds.flat()).map(id=>[id,playerById(id)?.name||"Játékos"])),
    completedAt:Date.now()
  };
  const idx=statsDB.games.findIndex(g=>g.id===record.id);
  if(idx>=0)statsDB.games[idx]=record; else statsDB.games.push(record);
  state.statsRecorded=true;
  persistPlayersAndStats();
}
function statAggregatePlayer(id){
  const r={games:0,wins:0,losses:0,draws:0,correct:0,pass:0,tabu:0};
  statsDB.games.forEach(g=>{
    const ti=(g.teams||[]).findIndex(t=>(t.playerIds||[]).includes(id)); if(ti<0)return;
    const a=g.teams[ti].score,b=g.teams[1-ti].score; r.games++; if(a>b)r.wins++; else if(a<b)r.losses++; else r.draws++;
    const acts=g.playerActions?.[id]||{}; r.correct+=acts.correct||0; r.pass+=acts.pass||0; r.tabu+=acts.tabu||0;
  }); return r;
}
function statAggregateTeam(key){
  const r={games:0,wins:0,losses:0,draws:0,pointsFor:0,pointsAgainst:0};
  statsDB.games.forEach(g=>{
    const ti=(g.teams||[]).findIndex(t=>canonicalTeamKey(t.playerIds||[])===key); if(ti<0)return;
    const a=g.teams[ti].score,b=g.teams[1-ti].score; r.games++; r.pointsFor+=a; r.pointsAgainst+=b; if(a>b)r.wins++; else if(a<b)r.losses++; else r.draws++;
  }); return r;
}
function renderStats(){
  const pbox=$("#individualStatsList"),tbox=$("#teamStatsList"); if(!pbox||!tbox)return;
  const historical=new Map();
  statsDB.games.forEach(g=>Object.entries(g.playerNames||{}).forEach(([id,name])=>historical.set(id,name)));
  playersDB.forEach(p=>historical.set(p.id,p.name));
  const players=[...historical.entries()].map(([id,name])=>({id,name,createdAt:playerById(id)?.createdAt||0})).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0)||a.name.localeCompare(b.name));
  pbox.innerHTML=players.length?players.map(p=>{const r=statAggregatePlayer(p.id);return `<div class="stats-row"><div><strong>${escapeHtml(p.name)}</strong><small>${r.games} játék · ${r.wins} győzelem · ${r.losses} vereség · ${r.draws} döntetlen</small></div><div class="stats-mini">✓ ${r.correct} · ⏭ ${r.pass} · 🚨 ${r.tabu}</div></div>`}).join(""):`<p class="muted">Még nincs játékos.</p>`;
  const groups=new Map();
  statsDB.games.forEach(g=>(g.teams||[]).forEach(t=>{const key=canonicalTeamKey(t.playerIds||[]);if(!groups.has(key))groups.set(key,{ids:canonicalPlayerIds(t.playerIds||[]),name:canonicalTeamLabel(t.playerIds||[],t.name?.split(" & ")||[])});}));
  tbox.innerHTML=groups.size?[...groups.entries()].map(([key,g])=>{const r=statAggregateTeam(key);return `<div class="stats-row"><div><strong>${escapeHtml(g.name)}</strong><small>${r.games} játék · ${r.wins} győzelem · ${r.losses} vereség · ${r.draws} döntetlen</small></div><div class="stats-mini">${r.pointsFor}–${r.pointsAgainst}</div></div>`}).join(""):`<p class="muted">Még nincs csapatstatisztika.</p>`;
}

function endGame(){
  state.gameStarted=false;
  clearInterval(timerId);
  timerId=null;
  state.completedStatsGameId=state.completedStatsGameId||state.resumeGameId||uid("game");
  const savedId=state.resumeGameId;
  if(savedId)removeSavedGame(savedId);
  state.resumeGameId=null;

  const[a,b]=state.scores;

  renderManualScores();
  $("#winner").textContent=
    a===b?"Döntetlen!":
    `${a>b?state.teams[0]:state.teams[1]} nyert!`;

  $("#finalScores").innerHTML=
    `<div>🔵 ${state.teams[0]}: ${a}</div>`+
    `<div>🔴 ${state.teams[1]}: ${b}</div>`;

  recordCompletedGameStats();
  show("gameEnd");
}

// Navigation
$("#startBtn").onclick=startGame;
$("#nextRoundBtn").onclick=continueAfterTurn;
$("#newGameBtn").onclick=()=>show("setup");
$("#againBtn").onclick=()=>show("setup");
$("#homeBtn").onclick=()=>show("home");
$("#rulesBtn").onclick=()=>show("rules");
$("#settingsBtn").onclick=()=>show("settings");
$("#reshuffleDeckBtn").onclick=()=>{
  const hasGame=!!state.resumeGameId;
  if(!hasGame){
    try{localStorage.removeItem("tabu_recent_cards_v13")}catch(e){}
    state.recentCards=[];
    alert("Nincs aktív vagy félbehagyott játék. A következő játék teljesen újrakevert paklival indul.");
    return;
  }
  if(!window.confirm("Újrakevered a paklit? A már kihúzott kártyák visszakerülnek a pakliba, így újra előkerülhetnek."))return;
  reshuffleDeck();
};
document.addEventListener("click",e=>{
  const resume=e.target.closest("[data-resume-id]");
  if(resume){ resumeSavedGame(resume.dataset.resumeId); return; }
  const del=e.target.closest("[data-delete-resume-id]");
  if(del){ deleteSavedGamePrompt(del.dataset.deleteResumeId); return; }
});

document.querySelectorAll("[data-back]")
  .forEach(b=>b.onclick=()=>show(b.dataset.back));

// Játékoskezelés és csapat-összeállítás.
document.addEventListener("click",e=>{
  const add=e.target.closest("#addTeam1,#addTeam2");
  if(add){ e.preventDefault(); addSetupPlayerRow(add.id==="addTeam1"?0:1); updateSetupPlayerOptions(); return; }
  const del=e.target.closest("[data-player-delete]");
  if(del){ e.preventDefault(); deleteManagedPlayer(del.dataset.playerDelete); return; }
});
$("#addManagedPlayer")?.addEventListener("click",addManagedPlayer);
$("#newPlayerName")?.addEventListener("keydown",e=>{if(e.key==="Enter")addManagedPlayer()});
$("#playersBack")?.addEventListener("click",()=>show("home"));
$("#statsBack")?.addEventListener("click",()=>show("home"));
$("#playersBtn")?.addEventListener("click",()=>{renderPlayerManagement();show("players")});
$("#statsBtn")?.addEventListener("click",()=>{renderStats();show("stats")});
$("#setupPlayersManageBtn")?.addEventListener("click",()=>{renderPlayerManagement();show("players")});

document.addEventListener("change",e=>{
  const inp=e.target.closest("[data-player-name]");
  if(inp)savePlayerName(inp.dataset.playerName,inp.value);
});

loadPlayersAndStats();
loadSavedGames();
renderResumeHome();
renderSetupPlayers();
renderPlayerManagement();
renderStats();

// Pull-to-refresh protection, while preserving normal scrolling.
document.addEventListener("touchstart",e=>{
  if(e.touches.length===1)
    touchStartY=e.touches[0].clientY;
},{passive:true});

document.addEventListener("touchmove",e=>{
  if(e.touches.length!==1)return;

  const dy=e.touches[0].clientY-touchStartY;

  if(window.scrollY===0&&dy>0)
    e.preventDefault();
},{passive:false});

// Disable long-press selection/copy/context menu everywhere except inputs.
document.addEventListener("selectstart",e=>{
  if(!e.target.matches("input,textarea,select"))
    e.preventDefault();
});

document.addEventListener("contextmenu",e=>{
  if(!e.target.matches("input,textarea,select"))
    e.preventDefault();
});

document.addEventListener("dragstart",e=>e.preventDefault());

if("serviceWorker"in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("sw.js");
  });
}

if($("#undoActionBtn"))$("#undoActionBtn").onclick=undoAction;

(function(){
  let sx=0,sy=0,el=null;
  document.addEventListener("pointerdown",e=>{
    el=e.target.closest("#game .tabu-card,#game .challenge-card,#game .card");
    if(!el||e.button>0)return;
    sx=e.clientX;sy=e.clientY;
  });
  document.addEventListener("pointermove",e=>{
    if(!el)return;
    const dx=e.clientX-sx,dy=e.clientY-sy;
    if(Math.abs(dx)+Math.abs(dy)>8){
      el.style.transition="none";
      el.style.transform=`translate(${dx}px,${dy}px) rotate(${Math.max(-12,Math.min(12,dx/25))}deg)`;
    }
  });
  document.addEventListener("pointerup",e=>{
    if(!el)return;
    const card=el,dx=e.clientX-sx,dy=e.clientY-sy;
    el=null;
    if(Math.max(Math.abs(dx),Math.abs(dy))<70){card.style.transition="";card.style.transform="";return}
    let action=null,x=0,y=0,r=0;
    if(Math.abs(dx)>=Math.abs(dy)&&dx>0){action="correct";x=innerWidth*1.35;r=22}
    else if(Math.abs(dx)>=Math.abs(dy)&&dx<0){action="pass";x=-innerWidth*1.35;r=-22}
    else if(dy<0){action="tabu";y=-innerHeight*1.25}
    if(!action){card.style.transition="transform .16s ease";card.style.transform="";return}
    card.style.transition="transform .16s cubic-bezier(.2,.8,.2,1),opacity .16s ease";
    card.style.transform=`translate(${x}px,${y}px) rotate(${r}deg)`;
    card.style.opacity="0";
    setTimeout(()=>{scoreAction(action);},140);
  });
})();

if($("#pauseMinus1"))$("#pauseMinus1").onclick=()=>changeScore(0,-1);
if($("#pausePlus1"))$("#pausePlus1").onclick=()=>changeScore(0,1);
if($("#pauseMinus2"))$("#pauseMinus2").onclick=()=>changeScore(1,-1);
if($("#pausePlus2"))$("#pausePlus2").onclick=()=>changeScore(1,1);


if($("#gameUndoBtn")){
  let undoTapLock=false;
  const runUndo=()=>{
    if(undoTapLock||!state.undo)return;
    undoTapLock=true;
    undoAction();
    setTimeout(()=>undoTapLock=false,250);
  };
  $("#gameUndoBtn").addEventListener("pointerup",e=>{
    e.preventDefault();
    e.stopPropagation();
    runUndo();
  });
  $("#gameUndoBtn").addEventListener("click",e=>{
    e.preventDefault();
    e.stopPropagation();
    runUndo();
  });
}
if($("#roundScoreMinus1"))$("#roundScoreMinus1").onclick=()=>changeRoundScore(0,-1);
if($("#roundScorePlus1"))$("#roundScorePlus1").onclick=()=>changeRoundScore(0,1);
if($("#roundScoreMinus2"))$("#roundScoreMinus2").onclick=()=>changeRoundScore(1,-1);
if($("#roundScorePlus2"))$("#roundScorePlus2").onclick=()=>changeRoundScore(1,1);

$("#roundCardsBtn")?.addEventListener("click",openRoundCards);
$("#roundCardsBack")?.addEventListener("click",()=>show("roundEnd"));



function customConfirm(message){
  return new Promise(resolve=>{
    const modal=$("#customConfirmModal");
    const text=$("#customConfirmText");
    const ok=$("#customConfirmOk");
    const cancel=$("#customConfirmCancel");
    if(!modal||!text||!ok||!cancel){ resolve(false); return; }
    text.textContent=message;
    modal.hidden=false;
    const finish=(value)=>{
      modal.hidden=true;
      ok.removeEventListener("click",onOk);
      cancel.removeEventListener("click",onCancel);
      resolve(value);
    };
    const onOk=()=>finish(true);
    const onCancel=()=>finish(false);
    ok.addEventListener("click",onOk);
    cancel.addEventListener("click",onCancel);
  });
}

document.addEventListener("click",e=>{
  const homeBtn=e.target.closest("#roundEndHomeBtn");
  if(!homeBtn)return;
  e.preventDefault();
  try{
    persistCurrentGame();
    show("home");
    renderResumeHome();
  }catch(err){
    console.error("Round-end save/home failed:",err);
  }
});
