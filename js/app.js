
let game;
const startButton = document.querySelector('#btn__reset');
const letterChoices = document.querySelector('#qwerty');
const phraseLetters = document.querySelector('#phrase > ul').children;

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    game.checkForWin();
});

