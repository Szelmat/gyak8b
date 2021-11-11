export class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word;
        this.remainingGuesses = 4;
        this.wordToGuess = word.toLowerCase().split('');
        this.status = 'playing';
    }
}