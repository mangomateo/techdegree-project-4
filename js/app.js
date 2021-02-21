
let game;
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('#btn__reset');
const letterChoices = document.querySelector('#qwerty');
const phraseLetters = document.querySelector('#phrase > ul').children;

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

letterChoices.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})