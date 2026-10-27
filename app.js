let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let started =false;
let level =0;
let h2=document.querySelector("h2");
let maxS=0;
document.addEventListener("keypress",function(){
  if(started ==false){
    console.log("game has started ");
    started =true;
    levelUp();
  }
});
function gameFlash(btn){
   btn.classList.add("gameFlash");
   setTimeout(function(){
    btn.classList.remove("gameFlash");
   },500); 
}
function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function(){
    btn.classList.remove("userFlash");
   },250); 
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level: ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomColor}`);
    gameFlash(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(idx===(gameSeq.length-1)){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over!!Your score was <b>${level-1}<b> <br> Press any key to start.`;
        document.querySelector(".btn-container").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector(".btn-container").style.backgroundColor="white"; 
        },250);
        if(maxS<(level-1)){
            maxS=level-1;
        }
        let max=document.querySelector(".max");
        max.innerHTML=`Max<br>${maxS}`
        reset();
    }

}
function btnPress(){
    let btn=this;
  userFlash(btn)
  let userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}
