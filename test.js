import { Hangman } from './Hangman';


describe('Tests for Hangman', () => {
    let game;
    let game2;
    beforeAll(() => {
        game = new Hangman('test', 4);
        game2 = new Hangman('truck', 2);
    });

    test('game object created with the right values', () => {
        expect(game.word).toBe('test');
        expect(game.remainingGuesses).toBe(4);
        expect(game.wordToGuess).toStrictEqual(['t', 'e', 's', 't']);
        expect(game.guessedLetters).toStrictEqual([]);
        expect(game.status).toBe('playing');
    });

    test('game object works with different parameters', () => {
        expect(game2.word).toBe('truck');
        expect(game2.remainingGuesses).toBe(2);
        expect(game2.wordToGuess).toStrictEqual(['t', 'r', 'u', 'c', 'k']);
        expect(game2.guessedLetters).toStrictEqual([]);
        expect(game2.status).toBe('playing');
    });

    describe('test for puzzle()', () => {
        test('empty remainingGuesses array gives _ _ _ _', () => {
            expect(game.puzzle).toBe('_ _ _ _ ');
        });

        test('empty remainingGuess array for game2 gives _ _ _ _ _', () => {
            expect(game2.puzzle).toBe('_ _ _ _ _ ');
        })
    });
});
