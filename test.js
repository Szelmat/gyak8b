import { Hangman } from './Hangman';


describe('Tests for Hangman', () => {
    let game;
    beforeAll(() => {
        game = new Hangman('test', 4);
    });

    test('game object created with the right values', () => {
        expect(game.word).toBe('test');
        expect(game.remainingGuesses).toBe(4);
        expect(game.wordToGuess).toStrictEqual(['t', 'e', 's', 't']);
        expect(game.guessedLetters).toStrictEqual([]);
        expect(game.status).toBe('playing');
    });

    test('game object works with different parameters', () => {
        let game2 = new Hangman('truck', 2);
        expect(game2.word).toBe('truck');
        expect(game2.remainingGuesses).toBe(2);
        expect(game2.wordToGuess).toStrictEqual(['t', 'r', 'u', 'c', 'k']);
        expect(game2.guessedLetters).toStrictEqual([]);
        expect(game2.status).toBe('playing');
    });
});
