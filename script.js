let turn="X";
var count=3;
let gameOver=false;
let gameWin= new Audio("gamewin.mp3")
let gameTouch= new Audio("touch.mp3")
function startGame(){
    if (count>0){
        document.getElementById('btn1').innerHTML=(count);
        count--;
        setTimeout(startGame, 700);
    }else{
        document.getElementById('btn1').innerHTML=("Start!");  
    }

const changeTurn= ()=>{
    return turn === "X"? "O": "X";
}
 

const checkWin=()=>{
  let boxtext = document.getElementsByClassName('main');
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  wins.forEach(e =>{
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
    document.querySelector('.screen').innerText = boxtext[e[0]].innerText + " Won";
    gameOver=true;
    gameWin.play();
    }
  })
}


let box=document.getElementsByClassName('main');
Array.from(box).forEach(element =>{
    let boxtext=element.querySelector('.box');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText=== ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            gameTouch.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('screen')[0].innerText="Turn for " + turn;
            }
        }
    })
})
}

let reset= document.getElementById('btn2');
reset.addEventListener('click', ()=>{
    let boxtext=document.querySelectorAll('.box');
    Array.from(boxtext).forEach(element =>{
        element.innerText=""
    });
    turn="X";
    gameOver=false;
    document.getElementsByClassName('screen')[0].innerText="Turn for " + turn;
})
