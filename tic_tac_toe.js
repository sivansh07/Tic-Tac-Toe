let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let winner = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;

const winPattern = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const enable = () => {
    for(let box of boxes) {
            box.disabled = false;
            box.innerText = " "; 
            msgContainer.classList.add("hide");
    }
}

const resetGame = () => {
    turn0 = true;
    enable();

}

const showWinner = (winner) => {
    msg.innerText = `Congrulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
}

const checkWinner = () => {
    for(let pattern of winPattern) {
        const pos1 = boxes[pattern[0]].innerText;
        const pos2 = boxes[pattern[1]].innerText;
        const pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("Winner", pos1);
            showWinner(pos1);
        }
    }
}; 
const disable = () => {
    for(let box of boxes) {
            box.disabled = true;
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        // console.log("Button was clicked.");
        if(turn0 == true) {
            box.innerText = 'O';
            box.disabled = true;
            turn0 = false;
        } else {
            box.innerText = 'X';
            box.disabled = true;
            turn0 = true;
        }
        checkWinner();
        
    });
});

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
