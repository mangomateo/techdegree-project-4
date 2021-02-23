
let game;
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('#btn__reset');
const letterChoices = document.querySelector('#qwerty');
const keyboardRow1 = letterChoices.firstElementChild.children;
const keyboardButtons = document.querySelectorAll('.keyrow > button');
const phraseContainer = document.querySelector('#phrase > ul'); 
const phraseLetters = document.querySelector('#phrase > ul').children;
const hearts = document.querySelector('#scoreboard > ol').children;

startButton.addEventListener('click', () => {
    
    phraseContainer.innerHTML = '';

    // Enable and reset classes on all keyboard buttons
    let keyboardButtonsArr = Array.from(keyboardButtons);
    keyboardButtonsArr.forEach(el => {
        el.classList.remove('wrong');
        el.classList.remove('chosen');
        el.classList.add('key');
        el.removeAttribute('disabled');
    });

    // Reset heart scoreboard
    let heartsArr = Array.from(hearts);
    heartsArr.forEach(el => el.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`);

    game = new Game();
    game.startGame();
});

letterChoices.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})