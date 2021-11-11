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
            result += '_ '
        });

        return result;
    }
}