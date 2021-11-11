export class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word;
        this.remainingGuesses = remainingGuesses;
        this.wordToGuess = word.toLowerCase().split('');
        this.guessedLetters = [];
        this.status = 'playing';
    }

    get puzzle() {
        let result = '';

        this.wordToGuess.forEach(letter => {
            if(this.guessedLetters.includes(letter)) {
                result += letter + ' ';
            } else {
                result += '_ ';
            }
        });

        return result;
    }
}