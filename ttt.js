console.log("Welcome to Tic Tac Toe");

let turn = "X";
let gameOver = false;

// change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// check winner
const checkWin = () => {

    let boxtext = document.getElementsByClassName("boxtext");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(e => {

        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won!";
            document.querySelector(".img").style.display = "block";
            gameOver = true;
        }

    });

}

// game logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector(".boxtext");

    element.addEventListener("click", () => {

        if (boxtext.innerText === "" && !gameOver) {

            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();

            if (!gameOver) {
                document.querySelector(".info").innerText = "Turn for " + turn;
            }

        }

    });

});
let reset = document.getElementById("reset");

reset.addEventListener("click", () => {

    let boxtexts = document.querySelectorAll(".boxtext");

    boxtexts.forEach(element => {
        element.innerText = "";
    });

    turn = "X";
    gameOver = false;

    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".img").style.display = "none";

});