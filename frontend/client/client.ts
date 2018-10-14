import fetch from 'isomorphic-fetch';

class Client {
    private readonly baseUrl: string;

    constructor(baseUrl: string = 'http://192.168.0.192:8080') {
        this.baseUrl = baseUrl;
    }

    fetchImages(): Promise<StorageData[]> {
        return fetch(`${this.baseUrl}/images`).then(res => res.json());
    }

    fetchImageData(key: string) {
        return fetch(`${this.baseUrl}/images/${key}/data`).then(res => res.json());
    }

    uploadImage(file: any) {
        const data = new FormData();
        data.append('file', file);

        return fetch(`${this.baseUrl}/images`, {
            method: 'POST',
            body: data,
        });
    }
}

export default Client;