
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
      
        const display = document.querySelector('#phrase').firstElementChild;
        const characterTest = char => {
            return /[a-z]/.test(char);
        }
        
        let newHTML = `<ul>`;
        // let phraseUL = `<ul>${newHTML}<ul>`;
            
        let array = this.phrase.split('');
        array.forEach(char => {
            characterTest(char) ? 
            newHTML +=  `<li class="hide letter ${char}">${char}</li>`: 
            newHTML +=  `<li class="space"> </li>`;
        });

        newHTML += `</ul>`;
        phrase.innerHTML = newHTML;
        
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}
