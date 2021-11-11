import { Hangman } from './Hangman';


describe('Tests for Hangman', () => {
    let game;
    let game2;
    beforeEach(() => {
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
        test('tests for puzzle in game', () => {
            expect(game.puzzle).toBe('_ _ _ _ ');
            game.guessedLetters.push('s');
            expect(game.puzzle).toBe('_ _ s _ ');
            game.guessedLetters.push('t');
            expect(game.puzzle).toBe('t _ s t ')
        });

        test('test for puzzle in game2', () => {
            expect(game2.puzzle).toBe('_ _ _ _ _ ');
            game2.guessedLetters.push('t');
            expect(game2.puzzle).toBe('t _ _ _ _ ');
        })
    });


    describe('test for makeGuess()', () => {
        test('guessing for game', () => {
            expect(game.makeGuess('e')).toBe(true);
            expect(game.guessedLetters).toEqual(expect.arrayContaining(['e']));
            expect(game.makeGuess('a')).toBe(false);
            expect(game.guessedLetters).toEqual(expect.arrayContaining(['e', 'a']));
            expect(game.makeGuess('e')).toBe(false);
            expect(game.guessedLetters).toStrictEqual(['e', 'a']);
        });
    });
});
