import { RandomWord } from './RandomWord.js';

document.querySelector('#start').addEventListener('click', start);

async function start() {
    let rndWord = new RandomWord;
    let word = await rndWord.randomWord()
    console.log(word);
}