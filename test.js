import { Hangman } from './Hangman';


describe('Tests for Hangman', () => {
    let game;
    beforeAll(() => {
        game = new Hangman();
    });

    test('game object created with the right values', () => {
        expect(game.status).toBe('playing');
    });
});
