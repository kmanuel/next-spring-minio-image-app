import fetch from 'isomorphic-fetch';

class Client {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'http://localhost:8080'
    }

    fetchRecordings() {
        return fetch(this.baseUrl + '/recordings').then(r => r.json());
    }
}

export default Client;