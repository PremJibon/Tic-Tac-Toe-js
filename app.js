let cells = document.querySelectorAll(".cell"),
player = document.querySelector(".player"),
playerTurn = "X",
winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkForWin(){
    winningCombinations.forEach(combination =>{
        let check = combination.every(idx =>
        cells[idx].innerHTML == playerTurn);
        if(check){
            highLightCells(combination)
            inactiveCells();
            
        }
    })
}
function highLightCells(combination){
    combination.forEach(idx =>{
        cells[idx].classList.add("highlight")
    })
}

function inactiveCells()
{
    cells.forEach(cell =>{
        cell.classList.add("inactive")
    })
}

cells.forEach(cell =>{
    cell.addEventListener("click",()=>{
        if(cell.innerHTML !=="") return;
        cell.innerHTML = playerTurn;
        checkForWin()
        playerTurn = playerTurn == "X"?"O":"X";
        player.innerHTML = `${playerTurn}'s Turn`
    })
})
document.querySelector(".restart-game").addEventListener("click",()=>{
    location.reload();
})