let boxes = document.querySelectorAll(".box")
let resetbutton = document.querySelector(".reset-button")
let newgamebutton = document.querySelector("#New-Button")
let messagecontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#message")
let container = document.querySelector(".container")
let turnO = true




const winpatterns = [
    [0,1,2],
    [3,4,5],
    [2,5,8],
    [0,3,6],
    [1,4,7],
    [6,7,8],
    [0,4,8],
    [2,4,6],
]

const resetgame = () => {
    turnO = true
    enableboxes()
    messagecontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if(turnO === true){
            box.innerText = "O"
            turnO = false
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        box.style.backgroundColor = "#D3D3D3"
        checkwinner()
       

    })
   
    
});

const disableboxes = () => {
    for (const box of boxes) {
        box.disabled = true
}
}
const enableboxes = () => {
    for (const box of boxes) {
        box.disabled = false
        box.innerText = " "
        box.style.backgroundColor ="crimson"
        }
}


const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winnner is ${winner}`
    
    messagecontainer.classList.remove("hide")
    disableboxes()
    

   
}

const checkwinner = () => {
    for (const pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val ){
               showwinner(pos1val)
               
            
               
            }
        }
        

        
    }
    checkdraw()

}

const showdraw = () => {
    msg.innerText = "It's a draw"
    messagecontainer.classList.remove("hide")
}

const checkdraw = () => {
    let allBoxesFilled = true;
    for (const box of boxes) {
        if (box.innerText === "") {
            allBoxesFilled = false;
            break;
        }
    }
    if (allBoxesFilled) {
        showdraw();
    }
};


newgamebutton.addEventListener("click", resetgame);
resetbutton.addEventListener("click", resetgame)