export class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word;
        this.remainingGuesses = remainingGuesses;
        this.wordToGuess = word.toLowerCase().split('');
        this.guessedLetters = [];
        this.status = 'playing';
    }

    get remainingGuesses() {
        return this.remainingGuesses;
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

    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isCorrect = this.wordToGuess.includes(guess);
        if(isUnique) {
            this.guessedLetters.push(guess);

            if(isCorrect) {
                return true
            } else {
                this.remainingGuesses--;
                return false;
            }
        } else {
            return false;
        }
    }

    calculateStatus() {
        if(this.remainingGuesses <= 0) {
            this.status = 'lost';
            return false;
        }

        if(this.wordToGuess.every(letter => this.guessedLetters.includes(letter))) {
            this.status = 'won';
            return false;
        } else {
            return true;
        }
    }
}