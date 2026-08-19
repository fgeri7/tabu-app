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
  time:60,
  paused:false,
  gameStarted:false,
  pendingDice:"classic",
  turnStats:{correct:0,pass:0,tabu:0}
};

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function fmt(n){return String(n).padStart(2,"0")}
function feedback(){if($("#vibrate")?.checked&&navigator.vibrate)navigator.vibrate(100)}

function deckFor(){
  const filtered=TABU_CARDS.filter(c=>state.difficulty==="all"||c.difficulty===state.difficulty);
  return shuffle(filtered.length?filtered:TABU_CARDS);
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
}

function current(){return state.sequence[state.pos]}

function nextCard(){
  if(!state.deck.length)state.deck=deckFor();
  state.card=state.deck.pop();

  $("#category").textContent=state.card.category||"";
  $("#difficultyLabel").textContent=state.card.difficulty||"";
  $("#word").textContent=state.card.word;
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
  state.deck=deckFor();
  state.gameStarted=true;
  state.paused=false;
  state.turnStats={correct:0,pass:0,tabu:0};

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

function showTurnEnd(sudden){
  const c=current();

  $("#roundEndTitle").textContent=
    sudden?"Döntetlen – hirtelen halál!":"Kör vége";

  $("#roundStats").textContent=sudden
    ?"Mindkét csapat megkapja a saját lehetőségét. Csak egy teljes páros után dőlhet el a játék."
    :`${state.teams[c.team]} – ${state.players[c.team][c.player]}: `
     +`${state.turnStats.correct} megfejtés · `
     +`${state.turnStats.tabu} TABU · `
     +`${state.turnStats.pass} passz`;

  $("#nextRoundBtn").textContent=
    sudden?"Hirtelen halál indítása →":"Következő játékos →";

  show("roundEnd");
}

function continueAfterTurn(){
  state.turnStats={correct:0,pass:0,tabu:0};

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
$("#correctBtn").onclick=awardCorrect;
$("#passBtn").onclick=()=>awardOpponent("pass");
$("#tabooBtn").onclick=()=>awardOpponent("tabu");

// Kártya-pöccintés:
// jobbra  = Kitaláltuk / saját csapat +1
// felfelé = TABU / ellenfél +1
// balra   = Passz / ellenfél +1
// Nincs külön swipe-indikátor a UI-ban.
//
// A mozdulat Tinder-szerű: a kártya ténylegesen követi az ujjat,
// majd elég nagy húzásnál látványosan kirepül a képernyőről.
let swipe={
  active:false,
  x:0,
  y:0,
  lastX:0,
  lastY:0,
  moved:false
};
let swipeLocked=false;
const SWIPE_THRESHOLD=70;
const cardEl=$(".tabu-card");

function resetCardPosition(){
  cardEl.classList.remove("swipe-exit");
  cardEl.style.transition="none";
  cardEl.style.transform="translate3d(0,0,0) rotate(0deg)";
  requestAnimationFrame(()=>{
    cardEl.style.transition="";
  });
}

function completeSwipe(action, direction){
  if(swipeLocked)return;
  swipeLocked=true;

  const w=window.innerWidth;
  const h=window.innerHeight;

  // Much farther than the visible edge, with a slight rotation for a
  // more natural card-stack/Tinder-like departure.
  let x=0,y=0,rotation=0;

  if(direction==="right"){
    x=w*1.35;
    rotation=18;
  }else if(direction==="left"){
    x=-w*1.35;
    rotation=-18;
  }else if(direction==="up"){
    y=-h*1.20;
    rotation=direction==="up"?-3:0;
  }

  cardEl.classList.add("swipe-exit");
  cardEl.style.transform=
    `translate3d(${x}px,${y}px,0) rotate(${rotation}deg)`;

  // Let the card visibly leave the screen before the next card appears.
  setTimeout(()=>{
    action();
    resetCardPosition();
    swipeLocked=false;
  },260);
}

cardEl.addEventListener("touchstart",e=>{
  if(swipeLocked||e.touches.length!==1)return;

  swipe={
    active:true,
    x:e.touches[0].clientX,
    y:e.touches[0].clientY,
    lastX:e.touches[0].clientX,
    lastY:e.touches[0].clientY,
    moved:false
  };

  cardEl.style.transition="none";
},{passive:true});

cardEl.addEventListener("touchmove",e=>{
  if(!swipe.active||swipeLocked||e.touches.length!==1)return;

  const currentX=e.touches[0].clientX;
  const currentY=e.touches[0].clientY;
  const dx=currentX-swipe.x;
  const dy=currentY-swipe.y;

  swipe.lastX=currentX;
  swipe.lastY=currentY;

  if(Math.hypot(dx,dy)<8)return;

  swipe.moved=true;

  // Follow the finger freely instead of clamping to a small range.
  // A small rotation is applied for the horizontal Tinder-like feel.
  const rotation=Math.max(-16,Math.min(16,dx*0.055));
  cardEl.style.transform=
    `translate3d(${dx}px,${dy}px,0) rotate(${rotation}deg)`;

  // Prevent the page from scrolling while the user is manipulating
  // the game card.
  e.preventDefault();
},{passive:false});

cardEl.addEventListener("touchend",()=>{
  if(!swipe.active||swipeLocked)return;

  const dx=swipe.lastX-swipe.x;
  const dy=swipe.lastY-swipe.y;
  const distance=Math.hypot(dx,dy);

  swipe.active=false;

  if(!swipe.moved||distance<SWIPE_THRESHOLD){
    resetCardPosition();
    return;
  }

  // Determine the dominant direction.
  if(Math.abs(dx)>Math.abs(dy)){
    if(dx>0){
      completeSwipe(awardCorrect,"right");
    }else{
      completeSwipe(()=>awardOpponent("pass"),"left");
    }
  }else if(dy<0){
    completeSwipe(()=>awardOpponent("tabu"),"up");
  }else{
    // Downward swipe is intentionally ignored.
    resetCardPosition();
  }
});

cardEl.addEventListener("touchcancel",()=>{
  swipe.active=false;
  if(!swipeLocked)resetCardPosition();
});

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

function endGame(){
  state.gameStarted=false;
  clearInterval(timerId);
  timerId=null;

  const[a,b]=state.scores;

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
