import { RandomWord } from './RandomWord.js';
import { Hangman } from './Hangman.js';

document.querySelector('#start').addEventListener('click', start);

async function start() {
    let rndWord = new RandomWord;
    let word = await rndWord.randomWord()
    let game = new Hangman(word, word.length);

    console.log(word);
    document.querySelector('#word').innerHTML = game.puzzle;
}