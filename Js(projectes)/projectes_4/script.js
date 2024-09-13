let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let user = true;
if (user == true) {
    console.log("you can play the game");
    
} else {
    console.log("you can not play the game now");
    
}

if (numGuess == 11) {
    console.log("start over again");
    
} else {
    console.log("continue to play the game");
    
}