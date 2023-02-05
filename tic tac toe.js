let audioturn = new Audio("bell.mp3");
let turn = "x";

//function to change turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x"
}


//  check win 
const checkwin = () => {

    }
    //game loic
let boxs = document.getElementsByClassName("boxcontainor");
Array.from(boxs).forEach(element => {
    let textbox = element.querySelector('.textbox');
    element.addEventListener('click', () => {
        if (textbox.innerText === '') {
            textbox.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            document.getElementById("turnyour")[0].innerText = "Turn for" + turn;
        }
    })
})