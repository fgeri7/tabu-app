const $=s=>document.querySelector(s);
const APP_VERSION='0.2.0';
const screens=[...document.querySelectorAll(".screen")];
const show=id=>{screens.forEach(x=>x.classList.toggle("active",x.id===id));};
let state={teams:["Kék csapat","Piros csapat"],scores:[0,0],round:1,rounds:5,duration:60,turn:0,deck:[],card:null,time:60,correct:0,pass:0,tabu:0};
let timerId=null;

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function deckFor(diff){return shuffle(TABU_CARDS.filter(c=>diff==="all"||c.difficulty===diff))}
function fmt(n){return String(n).padStart(2,"0")}
function save(){localStorage.setItem("tabuSettings",JSON.stringify({sound:$("#sound").checked,vibrate:$("#vibrate").checked}))}
function feedback(){if($("#vibrate").checked&&navigator.vibrate)navigator.vibrate(100)}

document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>show(b.dataset.back));
$("#rulesBtn").onclick=()=>show("rules");
$("#settingsBtn").onclick=()=>show("settings");
$("#newGameBtn").onclick=()=>show("setup");
$("#homeBtn").onclick=()=>show("home");
$("#againBtn").onclick=()=>show("setup");

const saved=JSON.parse(localStorage.getItem("tabuSettings")||"{}");
if(saved.sound!==undefined)$("#sound").checked=saved.sound;
if(saved.vibrate!==undefined)$("#vibrate").checked=saved.vibrate;
$("#sound").onchange=save; $("#vibrate").onchange=save;

function nextCard(){
  if(!state.deck.length)state.deck=deckFor($("#difficulty").value);
  state.card=state.deck.pop();
  $("#category").textContent=state.card.category;
  $("#difficultyLabel").textContent=state.card.difficulty;
  $("#word").textContent=state.card.word;
  $("#tabooList").innerHTML=state.card.taboo.map(x=>`<li>❌ ${x}</li>`).join("");
}
function update(){
  $("#score1").textContent=state.scores[0];
  $("#score2").textContent=state.scores[1];
  $("#roundLabel").textContent=`${state.round}. kör`;
  $("#teamLabel").textContent=state.teams[state.turn];
  $("#timer").textContent=`${fmt(Math.floor(state.time/60))}:${fmt(state.time%60)}`;
  $("#timer").classList.toggle("warning",state.time<=10);
  $("#progressBar").style.width=`${Math.max(0,state.time/state.duration*100)}%`;
}
function startTimer(){
  clearInterval(timerId); state.time=state.duration; update();
  timerId=setInterval(()=>{state.time--;update();if(state.time<=0)endRound()},1000);
}
function startGame(){
  state.teams=[$("#team1").value.trim()||"Kék csapat",$("#team2").value.trim()||"Piros csapat"];
  state.scores=[0,0];state.round=1;state.rounds=+$("#rounds").value;state.duration=+$("#duration").value;state.turn=0;
  state.deck=deckFor($("#difficulty").value);state.correct=0;state.pass=0;state.tabu=0;
  show("game");nextCard();startTimer();
}
function endRound(){
  if(!timerId)return;clearInterval(timerId);timerId=null;
  $("#roundEndTitle").textContent="Lejárt az idő!";
  $("#roundStats").textContent=`${state.teams[state.turn]}: +${state.correct} pont · ${state.tabu} TABU · ${state.pass} passz`;
  show("roundEnd");
}
$("#startBtn").onclick=startGame;
$("#correctBtn").onclick=()=>{state.scores[state.turn]++;state.correct++;feedback();nextCard();};
$("#passBtn").onclick=()=>{state.pass++;feedback();nextCard();};
$("#tabooBtn").onclick=()=>{state.tabu++;feedback();nextCard();};

$("#nextRoundBtn").onclick=()=>{
  state.round++;
  if(state.round>state.rounds){endGame();return}
  state.turn=1-state.turn;state.correct=0;state.pass=0;state.tabu=0;
  show("game");nextCard();startTimer();
};
function endGame(){
  const [a,b]=state.scores;
  $("#winner").textContent=a===b?"Döntetlen!":`${a>b?state.teams[0]:state.teams[1]} nyert!`;
  $("#finalScores").innerHTML=`<div>🔵 ${state.teams[0]}: ${a}</div><div>🔴 ${state.teams[1]}: ${b}</div>`;
  show("gameEnd");
}
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
