import axios from "axios";

export class APIHandler {
    constructor() {}

    getUniversities(country) {
        return axios.get('http://universities.hipolabs.com/search?country=' + country)
    }
}