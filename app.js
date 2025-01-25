let gameseq = [];
let userseq = [];

let btns = ['yellow' , 'red' , 'purple' ,'green'];


let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress' , function() {
    if(started == false) {
        console.log('game started');
        started = true;
    }

    levelUp();
})

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    }, 250);
}


function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;



    let randIndx = Math.floor(Math.random() * 3);
    let randColr = btns[randIndx];
    let randbtn = document.querySelector(`.${randColr}`);
    gameseq.push(randColr);
    console.log(gameseq);

    // console.log(randIndx);
    // console.log(randColr);
    // console.log(randbtn);
    gameFlash(randbtn);

}


function checkAns(idx) {
    // console.log('curr level' , level);


    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelUp , 1000);
        }
    }else {
        h2.innerHTML = `Game over ! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        },250);
        reset();
    }
}

function btnpress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColr = btn.getAttribute('id');
    userseq.push(userColr);

   checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns) {
    btn.addEventListener('click' , btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}