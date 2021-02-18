
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

        let overlay = document.querySelector('#overlay');
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

    handleInteraction() {
        
    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}