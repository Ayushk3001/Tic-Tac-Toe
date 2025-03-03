let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was Clicked");
        if(turn0){
            box.innerText = "X";
            turn0 = false;
        }
        else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const Draw = (winner) =>{
    msg.innerText = "It's a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" & pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos3Val);
                showWinner(pos1Val);
            }
        }
        
    }
    let isDraw = [...boxes].every(box => box.innerText !== "");
    if (isDraw) {
        Draw();
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);