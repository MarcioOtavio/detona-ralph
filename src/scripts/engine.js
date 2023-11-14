const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        tileLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    Values: {},
};

function randomSquare() {
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    })
    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

function addListenerHitBox() {
    state.view.squares.forEach((square)=>{})
}

function initialize() {
    randomSquare();
}

initialize();

