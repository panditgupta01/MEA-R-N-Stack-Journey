let level = 0;
let started = false;
let gameSeq = [];
let userSeq = [];
let btns = ["pink", "orange", "teal", "lightBlue"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started === false) {
        started = true;
        levelUp();
    }
});



function levelUp() {
    level++;
    h2.innerText = `Level - ${level}`;
    let n = Math.floor(Math.random()*4);
    let btnColor = btns[n];
    gameFlash(btnColor);
    gameSeq.push(btnColor);
    userSeq = [];
    clickCount = 0;
    console.log(gameSeq);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

let clickCount = level-1;
function btnPress() {
    if(started === true){
        let btn = this.classList[1];
        userFlash(btn);
        userSeq.push(btn);
        checkAns();
    }
}

let hs = 0;
function checkAns() {
    if(userSeq[clickCount] === gameSeq[clickCount]) {
        clickCount++;
        console.log(clickCount);
        if(userSeq.length == gameSeq.length) {
            levelUp();
        }
        console.log(userSeq);
    } else {
        if(hs < level) {
            hs = level;
        }
        h2.innerText = `Game Over! Highest Score is ${hs} Press any key to start.`;
        resetGame();
        over();
    }
}


function resetGame() {
    level = 0;
    clickCount = 0;
    started = false;
    gameSeq = [];
    userSeq = [];
}

function userFlash(a) {
    setTimeout(function() {
        document.querySelector(`.${a}`).classList.add("flash");
    },);
    setTimeout(function() {
        document.querySelector(`.${a}`).classList.remove("flash");
    }, 200);
}

function gameFlash(a) {
    setTimeout(function() {
        document.querySelector(`.${a}`).classList.add("flash");
    }, 200);
    setTimeout(function() {
        document.querySelector(`.${a}`).classList.remove("flash");
    }, 450);
}
function over() {
    setTimeout(function() {
        document.querySelector("body").classList.add("over");
    }, );
    setTimeout(function() {
        document.querySelector("body").classList.remove("over");
    }, 450);
}
