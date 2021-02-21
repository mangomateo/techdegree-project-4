
class Game {

    constructor() {

        this.missed = 0;
        this.phrases = [ new Phrase('bring back my girls'),
                         new Phrase('welcome to the good place'),
                         new Phrase('thats what she said'),
                         new Phrase('what does fold in the cheese mean'),
                         new Phrase('no you get murdered first') ];
        this.activePhrase = null;

    }

    /**
     * Starts the game by choosing a random phrase and setting it up for play in the display area
     */     
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Selects a random phrase from the phrases array
     */ 
    getRandomPhrase() {
        let randomOneToFive = Math.floor(Math.random() * 5);
        return this.phrases[randomOneToFive];
    }

    handleInteraction(letter) {
        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
        } else {
            this.removeLife();
        }
        this.checkForWin();
    }

    /**
     * Removes a life from the player and increases the missed property
     * Ends the game if player has no lives left
     */ 
    removeLife() {
        const hearts = document.querySelector('#scoreboard > ol').children;
        const lifeHeartHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`;
        const lostHeartHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;
        const lifeTaker = arr => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].innerHTML == lifeHeartHTML) {
                    arr[i].innerHTML = lostHeartHTML;
                    break;
                }
            }
        }

        this.missed++;
        this.missed > 4 ? this.gameOver() : lifeTaker(hearts);
    }

    
    /**
     * Checks if the player has revealed all of the letters in the active phrase
     */ 
    checkForWin() {
        let unsolvedLetters = 0;

        for (let i = 0; i < phraseLetters.length; i++) {
            phraseLetters[i].className == `hide letter ${ phraseLetters[i].textContent }` ? 
                unsolvedLetters++ : unsolvedLetters = unsolvedLetters;
        }

        return unsolvedLetters === 0;
    }

    /**
     * Ends the game and displays a win or lose message depending on outcome
     */
    gameOver(gameWon) {
        const endGameMessage = document.querySelector('#game-over-message');

        overlay.style.display = 'flex';
        overlay.classList.remove('start');

        if (gameWon) {
            endGameMessage.textContent = 'YOU WON!';
            overlay.classList.add('win');    
        } else {
            endGameMessage.textContent = 'YOU LOST!';
            overlay.classList.add('lose');
        }
    }
}