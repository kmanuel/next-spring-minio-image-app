import Router from 'next/router';
import ActionTypes from "./types";

const BASE_URL = 'http://192.168.0.192:8080';

const uploadImage = file => dispatch => {
    const data = new FormData();
    data.append('file', file);

    let payload = fetch(`${BASE_URL}/images`, {
        method: 'POST',
        body: data,
    }).then(() => dispatch(fetchImages()));

    Router.push('/list');

    return {
        type: ActionTypes.IMAGE_UPLOAD,
        payload,
    };
};

const fetchImages = () => {
    let payload = fetch(`${BASE_URL}/images`).then(res => res.json());
    return {
        type: ActionTypes.IMAGE_FETCH_ALL,
        payload,
    };
};

const fetchImageData = key => {
    let payload = fetch(`${BASE_URL}/images/${key}/data`).then(res => res.json());
    return {
        type: ActionTypes.IMAGE_DATA_FETCH,
        payload,
    };
};

export {
    uploadImage,
    fetchImages,
    fetchImageData,
};

