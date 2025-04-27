let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","blue"];
let level = 0;
let max = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started!");
        started = true;
        levelUp();
    }
})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameflash(randbtn);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerText = `Game over! Press the key to repeat.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}
function pressbtn(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    document.addEventListener("click" , pressbtn);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}