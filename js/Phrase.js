
class Phrase {

    constructor(phrase) {
        this.phrase = phrase;
    }

    /**
     * Converts phrase into HTML and displays in game area
     */
    addPhraseToDisplay() {
      
        const display = document.querySelector('#phrase').firstElementChild;
        const characterTest = char => {
            return /[a-z]/.test(char);
        }
        
        let newHTML = '';
            
        let array = this.phrase.split('');
        array.forEach(char => {
            characterTest(char) ? 
            newHTML +=  `<li class="hide letter ${char}">${char}</li>`: 
            newHTML +=  `<li class="space"> </li>`;
        });

        display.innerHTML = newHTML;
        
    }

    /**
     * Checks if a given letter is in this phrase
     * returns boolean value
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

     /**
     * If letter is matched, reveals letter on display
     */
    showMatchedLetter(letter) {        
        
        for (let i = 0; i < phraseLetters.length; i++) {
            if (phraseLetters[i].textContent === letter) {
                phraseLetters[i].classList.remove('hide');
                phraseLetters[i].classList.add('show');
            };
        }    

    }
}
