
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

    startGame() {

    }

    /**
     * Selects a random phrase from the phrases array
     */ 
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * 5);
        return this.phrases[randomNum];
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