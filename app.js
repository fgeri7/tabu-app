const $=s=>document.querySelector(s);
const screens=[...document.querySelectorAll(".screen")];
const show=id=>screens.forEach(x=>x.classList.toggle("active",x.id===id));
let timerId=null;
let touchStartY=0;

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
  turnCards:[]
};

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function fmt(n){return String(n).padStart(2,"0")}
function feedback(){if($("#vibrate")?.checked&&navigator.vibrate)navigator.vibrate(100)}

function deckFor(){
  const filtered=TABU_CARDS.filter(c=>state.difficulty==="all"||c.difficulty===state.difficulty);
  const history=new Map(state.recentCards.map(x=>[x.id,x.last]));
  const now=Date.now();
  // First exhaust every eligible card not yet used in this game.
  const fresh=filtered.filter(c=>!state.sessionUsed.has(c.id));
  const pool=fresh.length?fresh:filtered;
  return pool.map(card=>({
    card,
    last:history.get(card.id)||0,
    age:history.has(card.id)?now-(history.get(card.id)||0):Number.MAX_SAFE_INTEGER
  })).sort((a,b)=>b.age-a.age).map(x=>x.card);
}
function rememberCard(card){
  if(!card?.id)return;
  state.sessionUsed.add(card.id);
  state.recentCards=state.recentCards.filter(x=>x.id!==card.id);
  state.recentCards.unshift({id:card.id,last:Date.now()});
  state.recentCards=state.recentCards.slice(0,TABU_CARDS.length);
  localStorage.setItem("tabu_recent_cards_v13",JSON.stringify(state.recentCards));
}

function addPlayer(team,name=""){
  const box=$("#team"+(team+1)+"Players");
  if(!box)return;

  const row=document.createElement("div");
  row.className="player-row";

  const input=document.createElement("input");
  input.value=name;
  input.placeholder=`Játékos ${box.children.length+1}`;
  input.autocomplete="off";

  const remove=document.createElement("button");
  remove.type="button";
  remove.className="remove-player";
  remove.textContent="✕";
  remove.setAttribute("aria-label","Játékos törlése");
  remove.onclick=()=>{
    if(box.children.length>1)row.remove();
  };

  row.append(input,remove);
  box.append(row);
}

function initPlayers(){
  const a=$("#team1Players"),b=$("#team2Players");
  if(a&&!a.children.length){
    addPlayer(0,"Játékos 1");
    addPlayer(0,"Játékos 2");
  }
  if(b&&!b.children.length){
    addPlayer(1,"Játékos 1");
    addPlayer(1,"Játékos 2");
  }
}

function getPlayers(team){
  const box=$("#team"+(team+1)+"Players");
  return [...box.querySelectorAll("input")]
    .map((x,i)=>x.value.trim()||`Játékos ${i+1}`);
}

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

function nextCard(){
  if(!state.deck.length)state.deck=deckFor();
  if(!state.deck.length)return;
  state.card=state.deck.shift();
  rememberCard(state.card);

  $("#category").textContent=state.card.category||"";
  $("#difficultyLabel").textContent=state.card.difficulty||"";
  $("#word").textContent=state.card.word;
  const len=state.card.word.length;
  $("#word").style.fontSize = len<=11 ? "42px" : len<=14 ? "38px" : len<=17 ? "34px" : "30px";
  $("#tabooList").innerHTML=state.card.taboo
    .map(x=>`<li>❌ ${x}</li>`).join("");
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
  update();

  timerId=setInterval(()=>{
    if(state.paused)return;

    state.time--;
    update();

    if(state.time<=0)endTurn();
  },1000);
}

function startGame(){
  state.teams=[
    $("#team1").value.trim()||"Kék csapat",
    $("#team2").value.trim()||"Piros csapat"
  ];

  state.players=[
    getPlayers(0),
    getPlayers(1)
  ];

  state.cycles=+$("#cycles").value;
  state.duration=+$("#duration").value;
  state.difficulty=$("#difficulty").value;
  state.suddenDeath=$("#suddenDeath").checked;
  state.gameChanger=$("#gameChanger").checked;

  state.scores=[0,0];
  state.pos=0;
  state.sessionUsed=new Set();
  state.deck=[];
  state.gameStarted=true;
  state.paused=false;
  state.turnStats={correct:0,pass:0,tabu:0};
  state.turnCards=[];

  buildSequence();
  show("game");
  nextCard();

  if(state.gameChanger)showDiceBeforeTurn();
  else startTimer();
}

function showDiceBeforeTurn(){
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
}

$("#diceContinueBtn").onclick=()=>{
  $("#diceOverlay").classList.add("hidden");
  startTimer();
};

function endTurn(){
  clearInterval(timerId);
  timerId=null;

  if(state.pos+1<state.sequence.length){
    showTurnEnd(false);
    return;
  }

  if(state.scores[0]===state.scores[1]&&state.suddenDeath){
    buildSuddenDeath();
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
  const lead=Math.abs(state.scores[0]-state.scores[1]);
  const next=state.sequence[state.pos+1];

  $("#roundEndTitle").textContent=sudden?"Döntetlen – hirtelen halál!":"Kör vége";
  $("#roundStats").innerHTML=
    `<strong>Az állás: ${state.teams[0]} ${state.scores[0]} – ${state.scores[1]} ${state.teams[1]}</strong><br>`+
    (lead===0?"Döntetlen az állás.":`A következő csapatnak legalább <strong>${lead+1} pont</strong> kell a vezetés átvételéhez.`)+
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
    else startTimer();
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
  state.undo={scores:[...state.scores],turnStats:{...state.turnStats},turnCards:[...state.turnCards],card:state.card,deck:[...state.deck]};
  updateGameUndo();
  if(kind==="correct"){state.scores[c.team]++;state.turnStats.correct++}
  else {state.scores[1-c.team]++;state.turnStats[kind]++}

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
  $("#tabooList").innerHTML=state.card.taboo.map(x=>`<li>❌ ${x}</li>`).join("");
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
  state.undo=null;
  renderCurrentCard();
  update();
  updateGameUndo();
}

function pauseGame(){
  if(!state.gameStarted||timerId===null)return;
  state.paused=true;
  $("#pauseOverlay").classList.remove("hidden");
}

function resumeGame(){
  state.paused=false;
  $("#pauseOverlay").classList.add("hidden");
  update();
}

function goHome(){
  clearInterval(timerId);
  timerId=null;
  state.gameStarted=false;
  state.paused=false;
  $("#pauseOverlay").classList.add("hidden");
  $("#diceOverlay").classList.add("hidden");
  show("home");
}

$("#pauseBtn").onclick=pauseGame;
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
  // Refresh the round summary text so the lead requirement remains accurate.
  const sudden=state.suddenDeath===true;
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
}

function endGame(){
  state.gameStarted=false;
  clearInterval(timerId);
  timerId=null;

  const[a,b]=state.scores;

  renderManualScores();
  $("#winner").textContent=
    a===b?"Döntetlen!":
    `${a>b?state.teams[0]:state.teams[1]} nyert!`;

  $("#finalScores").innerHTML=
    `<div>🔵 ${state.teams[0]}: ${a}</div>`+
    `<div>🔴 ${state.teams[1]}: ${b}</div>`;

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

document.querySelectorAll("[data-back]")
  .forEach(b=>b.onclick=()=>show(b.dataset.back));

// Dynamic player buttons.
document.addEventListener("click",e=>{
  const add=e.target.closest("#addTeam1,#addTeam2");
  if(add){
    e.preventDefault();
    addPlayer(add.id==="addTeam1"?0:1);
    return;
  }

  const remove=e.target.closest(".remove-player");
  if(remove){
    e.preventDefault();
    const box=remove.closest(".player-list");
    if(box&&box.children.length>1){
      remove.closest(".player-row")?.remove();
    }
  }
});

initPlayers();

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


if($("#gameUndoBtn"))$("#gameUndoBtn").onclick=undoAction;
if($("#roundScoreMinus1"))$("#roundScoreMinus1").onclick=()=>changeRoundScore(0,-1);
if($("#roundScorePlus1"))$("#roundScorePlus1").onclick=()=>changeRoundScore(0,1);
if($("#roundScoreMinus2"))$("#roundScoreMinus2").onclick=()=>changeRoundScore(1,-1);
if($("#roundScorePlus2"))$("#roundScorePlus2").onclick=()=>changeRoundScore(1,1);

$("#roundCardsBtn")?.addEventListener("click",openRoundCards);
$("#roundCardsBack")?.addEventListener("click",()=>show("roundEnd"));
