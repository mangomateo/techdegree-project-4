
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
      
        const display = document.querySelector('#phrase');
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

        phrase.innerHTML = newHTML;
        
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}
