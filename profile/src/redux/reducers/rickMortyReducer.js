import { ActionTypes } from "../actions/rickMortyActions";

const initialState = {
    characters: [],
    error: null,
    isLoading: false,
    info:{},
}
const rickMortyReducer = (state=initialState, action) => {
switch(action.type){
    case ActionTypes.SET_CHARACTERS:{
        return {
            ...state,
            characters: action.characters
        }
    }
    case ActionTypes.SET_INFO:{
        return {
            ...state,
            info: action.info
        }
    }
    case ActionTypes.SET_ERROR:{
        return {
            ...state,
            error: action.error
        }
    }
    default:
        return state
}
};

export default rickMortyReducer;
