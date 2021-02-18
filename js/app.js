
let game;
const startButton = document.querySelector('#btn__reset');
const letterChoices = document.querySelector('#qwerty');

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

