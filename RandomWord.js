export class RandomWord {
    async randomWord() {
        return fetch('https://random-word-api.herokuapp.com/word', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            return data[0];
        });
    }
}