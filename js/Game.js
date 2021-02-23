
class Game {

    constructor() {

        this.missed = 0;
        this.phrases = [ new Phrase('warmest regards'),
                         new Phrase('bring back my girls'),
                         new Phrase('the crows have eyes'),
                         new Phrase('eleganza extravanagza'),
                         new Phrase('ew david') ];
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

    /**
     * Handles game logic whenever a letter is selected
     * Updates game appropriately if a chosen letter is in the phrase or not
     * Ends the game if win condition has been met
     */ 
    handleInteraction(button) {
        button.setAttribute('disabled', true);
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            this.checkForWin() ? this.gameOver(true) : undefined;
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    /**
     * Removes a life from the player and increases the missed property
     * Ends the game if player has no lives left
     */ 
    removeLife() {
        // const hearts = document.querySelector('#scoreboard > ol').children;
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
            endGameMessage.textContent = `YOU WON! The phrase was: '${ this.activePhrase.phrase }'`;
            overlay.className = 'win';    
        } else {
            endGameMessage.textContent = `YOU LOST! The phrase was: '${ this.activePhrase.phrase }'`;
            overlay.className = 'lose';
        }
    }
}