const $=s=>document.querySelector(s);
const screens=[...document.querySelectorAll(".screen")];
const show=id=>screens.forEach(x=>x.classList.toggle("active",x.id===id));
let timerId=null,touchStartY=0;

const state={
  teams:["Kék csapat","Piros csapat"],
  players:[["Játékos 1","Játékos 2"],["Játékos 1","Játékos 2"]],
  scores:[0,0],
  cycles:2,duration:60,difficulty:"all",suddenDeath:true,gameChanger:false,
  sequence:[],pos:0,deck:[],card:null,time:60,
  paused:false,gameStarted:false,pendingDice:"classic",
  turnStats:{correct:0,pass:0,tabu:0}
};

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function fmt(n){return String(n).padStart(2,"0")}
function feedback(){if($("#vibrate")?.checked&&navigator.vibrate)navigator.vibrate(100)}
function deckFor(){return shuffle(TABU_CARDS.filter(c=>state.difficulty==="all"||c.difficulty===state.difficulty))}

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
  remove.onclick=()=>{if(box.children.length>1)row.remove()};
  row.append(input,remove);
  box.append(row);
}
function getPlayers(team){
  const box=$("#team"+(team+1)+"Players");
  return [...box.querySelectorAll("input")].map((x,i)=>x.value.trim()||`Játékos ${i+1}`);
}
function initPlayers(){
  const a=$("#team1Players"),b=$("#team2Players");
  if(a&&!a.children.length){addPlayer(0,"Játékos 1");addPlayer(0,"Játékos 2")}
  if(b&&!b.children.length){addPlayer(1,"Játékos 1");addPlayer(1,"Játékos 2")}
}
function buildSequence(){
  const a=state.players[0],b=state.players[1],m=Math.max(a.length,b.length);
  state.sequence=[];
  for(let cycle=1;cycle<=state.cycles;cycle++){
    for(let i=0;i<m;i++){
      if(a[i])state.sequence.push({team:0,player:i,cycle});
      if(b[i])state.sequence.push({team:1,player:i,cycle});
    }
    // If team sizes differ, the smaller team gets one extra turn per cycle.
    if(a.length!==b.length){
      const shortTeam=a.length<b.length?0:1;
      const arr=state.players[shortTeam];
      state.sequence.push({team:shortTeam,player:(cycle-1)%arr.length,cycle,extra:true});
    }
  }
}
function current(){return state.sequence[state.pos]}
function nextCard(){
  if(!state.deck.length)state.deck=deckFor();
  if(!state.deck.length)return;
  state.card=state.deck.pop();
  $("#category").textContent=state.card.category||"";
  $("#difficultyLabel").textContent=state.card.difficulty||"";
  $("#word").textContent=state.card.word;
  $("#tabooList").innerHTML=state.card.taboo.map(x=>`<li>❌ ${x}</li>`).join("");
}
function update(){
  const c=current();if(!c)return;
  $("#score1").textContent=state.scores[0];
  $("#score2").textContent=state.scores[1];
  $("#roundLabel").textContent=`${c.cycle}. forduló`;
  $("#teamLabel").textContent=state.teams[c.team];
  if($("#playerLabel"))$("#playerLabel").textContent=`Magyaráz: ${state.players[c.team][c.player]}`;
  $("#timer").textContent=`${fmt(Math.floor(state.time/60))}:${fmt(state.time%60)}`;
  $("#timer").classList.toggle("warning",state.time<=10);
  $("#progressBar").style.width=`${Math.max(0,state.time/(state.pendingDice==="double"?state.duration*2:state.duration)*100)}%`;
}
function startTimer(){
  clearInterval(timerId);
  state.time=state.pendingDice==="double"?state.duration*2:state.duration;
  state.paused=false;update();
  timerId=setInterval(()=>{
    if(state.paused)return;
    state.time--;update();
    if(state.time<=0)endTurn();
  },1000);
}
function startGame(){
  state.teams=[
    $("#team1").value.trim()||"Kék csapat",
    $("#team2").value.trim()||"Piros csapat"
  ];
  state.players=[getPlayers(0),getPlayers(1)];
  state.cycles=+($("#cycles")?.value||2);
  state.duration=+($("#duration")?.value||60);
  state.difficulty=$("#difficulty")?.value||"all";
  state.suddenDeath=$("#suddenDeath")?.checked!==false;
  state.gameChanger=$("#gameChanger")?.checked===true;
  state.scores=[0,0];state.pos=0;state.deck=deckFor();
  state.gameStarted=true;state.turnStats={correct:0,pass:0,tabu:0};
  buildSequence();show("game");nextCard();
  if(state.gameChanger)showDiceBeforeTurn();else startTimer();
}
function showDiceBeforeTurn(){
  state.pendingDice=shuffle(["single","double","statue","all","classic"])[0];
  const data={
    single:["👤","EGY KITALÁLÓ!","Csak egy kijelölt csapattárs tippelhet."],
    double:["⏱️","DUPLA IDŐ!","Ebben a körben kétszer annyi idő áll rendelkezésre."],
    statue:["🗿","SZOBOR!","A magyarázó nem gesztikulálhat."],
    all:["🌐","MINDENKI JÁTSZIK!","Mindkét csapat tippelhet."],
    classic:["🎯","KLASSZIKUS JÁTÉK","Nincs külön módosítás."]
  }[state.pendingDice];
  $("#diceIcon").textContent=data[0];$("#diceTitle").textContent=data[1];$("#diceDescription").textContent=data[2];
  $("#diceOverlay").classList.remove("hidden");
}
$("#diceContinueBtn").onclick=()=>{$("#diceOverlay").classList.add("hidden");startTimer()};

function endTurn(){
  clearInterval(timerId);timerId=null;
  if(state.pos+1<state.sequence.length){showTurnEnd(false);return}
  if(state.scores[0]===state.scores[1]&&state.suddenDeath){
    buildSuddenDeath();showTurnEnd(true);return;
  }
  endGame();
}
function buildSuddenDeath(){
  const a=state.players[0],b=state.players[1],m=Math.max(a.length,b.length);
  state.sequence=[];
  for(let i=0;i<m;i++){
    if(a[i])state.sequence.push({team:0,player:i,cycle:"⚡"});
    if(b[i])state.sequence.push({team:1,player:i,cycle:"⚡"});
  }
  state.pos=0;
}
function showTurnEnd(sudden){
  const c=current();
  $("#roundEndTitle").textContent=sudden?"Döntetlen – hirtelen halál!":"Kör vége";
  $("#roundStats").textContent=sudden?
    "Mindkét csapat megkapja a saját lehetőségét. Csak egy teljes páros után dőlhet el a játék.":
    `${state.teams[c.team]} – ${state.players[c.team][c.player]}: ${state.turnStats.correct} megfejtés · ${state.turnStats.tabu} TABU · ${state.turnStats.pass} passz`;
  $("#nextRoundBtn").textContent=sudden?"Hirtelen halál indítása →":"Következő játékos →";
  show("roundEnd");
}
function continueAfterTurn(){
  state.turnStats={correct:0,pass:0,tabu:0};
  if(current()?.cycle==="⚡"&&state.pos%2===1&&state.scores[0]!==state.scores[1]){endGame();return}
  if(state.pos+1>=state.sequence.length){endGame();return}
  state.pos++;show("game");nextCard();
  if(state.gameChanger)showDiceBeforeTurn();else startTimer();
}

$("#correctBtn").onclick=()=>{const c=current();state.scores[c.team]++;state.turnStats.correct++;feedback();nextCard();update()};
$("#passBtn").onclick=()=>{const c=current();state.scores[1-c.team]++;state.turnStats.pass++;feedback();nextCard();update()};
$("#tabooBtn").onclick=()=>{const c=current();state.scores[1-c.team]++;state.turnStats.tabu++;feedback();nextCard();update()};

function pauseGame(){if(!state.gameStarted||timerId===null)return;state.paused=true;$("#pauseOverlay").classList.remove("hidden")}
function resumeGame(){state.paused=false;$("#pauseOverlay").classList.add("hidden");update()}
function goHome(){
  clearInterval(timerId);timerId=null;state.gameStarted=false;state.paused=false;
  $("#pauseOverlay").classList.add("hidden");$("#diceOverlay").classList.add("hidden");show("home");
}
$("#pauseBtn").onclick=pauseGame;$("#gameMenuBtn").onclick=pauseGame;$("#resumeBtn").onclick=resumeGame;
$("#pauseHomeBtn").onclick=goHome;$("#pauseEndBtn").onclick=goHome;

function endGame(){
  state.gameStarted=false;clearInterval(timerId);timerId=null;
  const[a,b]=state.scores;
  $("#winner").textContent=a===b?"Döntetlen!":`${a>b?state.teams[0]:state.teams[1]} nyert!`;
  $("#finalScores").innerHTML=`<div>🔵 ${state.teams[0]}: ${a}</div><div>🔴 ${state.teams[1]}: ${b}</div>`;
  show("gameEnd");
}

$("#startBtn").onclick=startGame;
$("#nextRoundBtn").onclick=continueAfterTurn;
$("#newGameBtn").onclick=()=>show("setup");
$("#againBtn").onclick=()=>show("setup");
$("#homeBtn").onclick=()=>show("home");
$("#rulesBtn").onclick=()=>show("rules");
$("#settingsBtn").onclick=()=>show("settings");
document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>show(b.dataset.back));

document.addEventListener("click",e=>{
  const add=e.target.closest("#addTeam1,#addTeam2");
  if(add){e.preventDefault();addPlayer(add.id==="addTeam1"?0:1);return}
  const remove=e.target.closest(".remove-player");
  if(remove){e.preventDefault();const box=remove.closest(".player-list");if(box&&box.children.length>1)remove.closest(".player-row")?.remove()}
});

document.addEventListener("touchstart",e=>{if(e.touches.length===1)touchStartY=e.touches[0].clientY},{passive:true});
document.addEventListener("touchmove",e=>{
  if(e.touches.length===1&&window.scrollY===0&&e.touches[0].clientY-touchStartY>0)e.preventDefault();
},{passive:false});

document.addEventListener("selectstart",e=>{if(!e.target.matches("input,textarea,select"))e.preventDefault()});
document.addEventListener("contextmenu",e=>{if(!e.target.matches("input,textarea,select"))e.preventDefault()});
document.addEventListener("dragstart",e=>e.preventDefault());

initPlayers();
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
