import ActionTypes from "../actions/types";

const defaultState = {
    imagedata: []
};

const imageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.IMAGE_FETCH_ALL:
            return {
                ...state,
                images: action.payload
            };
        case ActionTypes.IMAGE_DATA_FETCH:
            return {
                ...state,
                imagedata: [action.payload, ...state.imagedata]
            }
    }
    return state;
};

export default imageReducer;