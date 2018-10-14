import Router from 'next/router';
import ActionTypes from "./types";
import Client from '../../client/client';

const apiClient = new Client('http://192.168.0.192:8080');

const uploadImage = file => dispatch => {
    apiClient.uploadImage(file)
        .then(() => dispatch(fetchImages()))
        .then(Router.push('/list'));
    return {
        type: ActionTypes.IMAGE_UPLOAD
    };
};

const fetchImages = () => {
    return {
        type: ActionTypes.IMAGE_FETCH_ALL,
        payload: apiClient.fetchImages()
    };
};

const fetchImageData = (key: string)=> {
    return {
        type: ActionTypes.IMAGE_DATA_FETCH,
        payload: apiClient.fetchImageData(key)
    };
};

export {
    uploadImage,
    fetchImages,
    fetchImageData,
};

