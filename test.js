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
        expect(game.status).toBe('playing');
    });
});
