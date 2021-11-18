import axios from "axios";

export class RandomWord {
    randomWord() {
        return axios.get('https://random-word-api.herokuapp.com/word');
    }
}