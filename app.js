let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO=true;
let count=0;
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const draw=()=>{
    msg.innerText = `Game Draw , Start New Game !`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3 ){
                showWinner(pos1);
            }
            else if(count===9){
                draw();
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO==true){
        box.style.color = "green";
        box.innerText="X";
        turnO=false;
    }
    else{
        box.innerText="O";
        turnO=true;
    }
    count++;
    box.disabled=true;
    checkWinner();
    })
})

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);