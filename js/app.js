
let game;
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('#btn__reset');
const letterChoices = document.querySelector('#qwerty');
const keyboardButtons = document.querySelectorAll('.keyrow > button');
const phraseContainer = document.querySelector('#phrase > ul'); 
const phraseLetters = document.querySelector('#phrase > ul').children;
const hearts = document.querySelector('#scoreboard > ol').children;


/**
 * Starts the game when start button is clicked
 */ 
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});


/**
 * Runs game logic whenever a button is clicked
 */ 
letterChoices.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});


/**
 * Runs game logic whenever a letter is typed 
 */ 
window.addEventListener('keydown', e => 
    keyboardButtons.forEach(el => e.key === el.textContent ? 
    game.handleInteraction(el) : null));