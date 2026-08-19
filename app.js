const $=s=>document.querySelector(s);
const screens=[...document.querySelectorAll(".screen")];
const show=id=>screens.forEach(x=>x.classList.toggle("active",x.id===id));
const VERSION="0.4.0";

let state={
  teams:["Kék csapat","Piros csapat"],
  players:[["Játékos 1","Játékos 2"],["Játékos 1","Játékos 2"]],
  scores:[0,0],
  cycle:1,
  cycles:2,
  duration:60,
  turn:0,
  playerIndex:0,
  sequence:[],
  sequencePos:0,
  deck:[],
  card:null,
  time:60,
  correct:0,pass:0,tabu:0,
  paused:false,gameStarted:false,
  suddenDeath:true,
  suddenDeathPos:0
};
let timerId=null;

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function deckFor(diff){return shuffle(TABU_CARDS.filter(c=>diff==="all"||c.difficulty===diff))}
function fmt(n){return String(n).padStart(2,"0")}
function feedback(){if($("#vibrate").checked&&navigator.vibrate)navigator.vibrate(100)}
function save(){localStorage.setItem("tabuSettings",JSON.stringify({sound:$("#sound").checked,vibrate:$("#vibrate").checked}))}

document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>show(b.dataset.back));
$("#rulesBtn").onclick=()=>show("rules");
$("#settingsBtn").onclick=()=>show("settings");
$("#newGameBtn").onclick=()=>show("setup");
$("#homeBtn").onclick=()=>show("home");
$("#againBtn").onclick=()=>show("setup");
const saved=JSON.parse(localStorage.getItem("tabuSettings")||"{}");
if(saved.sound!==undefined)$("#sound").checked=saved.sound;
if(saved.vibrate!==undefined)$("#vibrate").checked=saved.vibrate;
$("#sound").onchange=save;$("#vibrate").onchange=save;

function buildSequence(){
  const n=+$("#playersPerTeam").value;
  state.players=[
    [$("#p11").value.trim()||"Játékos 1", $("#p12").value.trim()||"Játékos 2"],
    [$("#p21").value.trim()||"Játékos 1", $("#p22").value.trim()||"Játékos 2"]
  ];
  state.players=state.players.map(team=>team.slice(0,n));
  state.sequence=[];
  // One "cycle" = every player from both teams gets exactly one turn.
  for(let c=0;c<state.cycles;c++){
    for(let i=0;i<n;i++){
      state.sequence.push({team:0,player:i,cycle:c+1});
      state.sequence.push({team:1,player:i,cycle:c+1});
    }
  }
}
function nextCard(){
  if(!state.deck.length)state.deck=deckFor("all");
  state.card=state.deck.pop();
  $("#category").textContent=state.card.category;
  $("#difficultyLabel").textContent=state.card.difficulty;
  $("#word").textContent=state.card.word;
  $("#tabooList").innerHTML=state.card.taboo.map(x=>`<li>❌ ${x}</li>`).join("");
}
function update(){
  const cur=state.sequence[state.sequencePos];
  $("#score1").textContent=state.scores[0];
  $("#score2").textContent=state.scores[1];
  $("#roundLabel").textContent=`${cur?.cycle||state.cycle}. forduló`;
  $("#teamLabel").textContent=state.teams[cur?.team??state.turn];
  $("#playerLabel").textContent=cur?`Magyaráz: ${state.players[cur.team][cur.player]}`:"";
  $("#timer").textContent=`${fmt(Math.floor(state.time/60))}:${fmt(state.time%60)}`;
  $("#timer").classList.toggle("warning",state.time<=10);
  $("#progressBar").style.width=`${Math.max(0,state.time/state.duration*100)}%`;
}
function startTimer(){
  clearInterval(timerId);
  state.paused=false;state.time=state.duration;update();
  timerId=setInterval(()=>{if(state.paused)return;state.time--;update();if(state.time<=0)endTurn()},1000);
}
function startGame(){
  state.teams=[$("#team1").value.trim()||"Kék csapat",$("#team2").value.trim()||"Piros csapat"];
  state.scores=[0,0];state.cycles=+$("#cycles").value;state.duration=+$("#duration").value;
  state.suddenDeath=$("#suddenDeath").checked;state.sequencePos=0;state.suddenDeathPos=0;
  state.deck=deckFor("all");state.correct=0;state.pass=0;state.tabu=0;state.gameStarted=true;
  buildSequence();show("game");nextCard();startTimer();
}
function endTurn(){
  clearInterval(timerId);timerId=null;
  if(state.sequencePos+1<state.sequence.length){
    showTurnEnd();
    return;
  }
  if(state.scores[0]===state.scores[1] && state.suddenDeath){
    state.suddenDeathPos=0;
    buildSuddenDeathSequence();
    showTurnEnd(true);
    return;
  }
  endGame();
}
function buildSuddenDeathSequence(){
  const n=state.players[0].length;
  state.sequence=[];
  for(let i=0;i<n;i++){
    state.sequence.push({team:0,player:i,cycle:"⚡"});
    state.sequence.push({team:1,player:i,cycle:"⚡"});
  }
  state.sequencePos=0;
}
function showTurnEnd(sudden=false){
  $("#roundEndTitle").textContent=sudden?"Döntetlen – hirtelen halál!":"Kör vége";
  const cur=state.sequence[state.sequencePos];
  $("#roundStats").textContent=sudden?
    "Mindkét csapatnak ugyanannyi új lehetősége lesz. A hosszabbítás addig tart, amíg egy teljes páros után valaki vezet.":
    `${state.teams[cur.team]} – ${state.players[cur.team][cur.player]}: +${state.correct} kitalált · ${state.tabu} TABU · ${state.pass} passz`;
  $("#nextRoundBtn").textContent=sudden?"Hirtelen halál indítása →":"Következő játékos →";
  show("roundEnd");
}
function continueAfterTurn(){
  state.correct=0;state.pass=0;state.tabu=0;
  if(state.suddenDeathPos!==0 || state.sequence[state.sequencePos]?.cycle==="⚡"){
    const currentScores=[...state.scores];
    const pairDone=(state.sequencePos%2===1);
    if(pairDone && currentScores[0]!==currentScores[1]){endGame();return;}
  }
  if(state.sequencePos+1>=state.sequence.length){
    if(state.scores[0]!==state.scores[1]){endGame();return;}
    buildSuddenDeathSequence();
  }else state.sequencePos++;
  show("game");nextCard();startTimer();
}
$("#startBtn").onclick=startGame;
$("#nextRoundBtn").onclick=continueAfterTurn;
$("#correctBtn").onclick=()=>{const cur=state.sequence[state.sequencePos];state.scores[cur.team]++;state.correct++;feedback();nextCard();};
$("#passBtn").onclick=()=>{const cur=state.sequence[state.sequencePos];state.scores[1-cur.team]++;state.pass++;feedback();nextCard();};
$("#tabooBtn").onclick=()=>{const cur=state.sequence[state.sequencePos];state.scores[1-cur.team]++;state.tabu++;feedback();nextCard();};

function pauseGame(){if(!state.gameStarted||timerId===null)return;state.paused=true;$("#pauseOverlay").classList.remove("hidden");}
function resumeGame(){state.paused=false;$("#pauseOverlay").classList.add("hidden");update();}
function goHomeFromGame(){clearInterval(timerId);timerId=null;state.gameStarted=false;state.paused=false;$("#pauseOverlay").classList.add("hidden");show("home");}
$("#pauseBtn").onclick=pauseGame;$("#gameMenuBtn").onclick=pauseGame;
$("#resumeBtn").onclick=resumeGame;$("#pauseHomeBtn").onclick=goHomeFromGame;$("#pauseEndBtn").onclick=goHomeFromGame;
function endGame(){state.gameStarted=false;clearInterval(timerId);timerId=null;const [a,b]=state.scores;$("#winner").textContent=a===b?"Döntetlen!":`${a>b?state.teams[0]:state.teams[1]} nyert!`;$("#finalScores").innerHTML=`<div>🔵 ${state.teams[0]}: ${a}</div><div>🔴 ${state.teams[1]}: ${b}</div>`;show("gameEnd");}

let touchStartY=0;
document.addEventListener("touchstart",e=>{if(e.touches.length===1)touchStartY=e.touches[0].clientY},{passive:true});
document.addEventListener("touchmove",e=>{if(e.touches.length===1&&window.scrollY===0&&e.touches[0].clientY-touchStartY>0)e.preventDefault()},{passive:false});
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
