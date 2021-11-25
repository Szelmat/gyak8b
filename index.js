import { RandomWord } from './RandomWord.js';
import { Hangman } from './Hangman.js';

document.querySelector('#start').addEventListener('click', start);
let game;

async function start() {
    let rndWord = new RandomWord;
    let word = await rndWord.randomWord()
    game = new Hangman(word, word.length);

    console.log(word);

    document.querySelector('#result').innerHTML = '';
    getPuzzle();
    getRemainingGuesses();
    generateButtons();
}

function generateButtons() {
    let div = document.querySelector('#buttons');
    div.innerHTML = '';

    for(let i = 0; i < 26; i++) {
        let ch = String.fromCharCode(97 + i);
        let element = document.createElement('BUTTON');
        element.textContent = ch;
        element.setAttribute('id', ch)
        element.addEventListener('click', () => {
            game.makeGuess(ch);
            getPuzzle();
            document.querySelector('#' + ch).disabled = true;
            getRemainingGuesses();
            checkState();
        })
        div.appendChild(element);
    }
}

function getPuzzle() {
    document.querySelector('#word').innerHTML = game.puzzle;
}

function getRemainingGuesses() {
    document.querySelector('#remaining').innerHTML = "Hátralévő hibás tippek: " + game.remainingGuesses;
}

function checkState() {
    let result = document.querySelector('#result');

    if(game.status === 'won') {
        result.innerHTML = "🎊Gratulálunk, nyertél!🎊";
        for(let i = 0; i < 26; i++) {
            let ch = String.fromCharCode(97 + i);
            document.querySelector('#' + ch).disabled = true;
        }
    } else if(game.status === 'lost') {
        result.innerHTML = "Sajnáljuk, vesztettél.";
        for(let i = 0; i < 26; i++) {
            let ch = String.fromCharCode(97 + i);
            document.querySelector('#' + ch).disabled = true;
        }
    }
}