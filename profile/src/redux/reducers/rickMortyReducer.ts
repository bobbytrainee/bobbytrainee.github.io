import { ActionTypes } from "../actions/rickMortyActions";
import {RMReducerActionTypes} from "../../common/types";

interface initialStateType{
    characters: [],
    error: null,
    isLoading: boolean,
    info:{},
}


const initialState: initialStateType = {
    characters: [],
    error: null,
    isLoading: false,
    info:{},
}

const rickMortyReducer = (state=initialState, action: RMReducerActionTypes) => {
switch(action.type){
    case ActionTypes.SET_CHARACTERS:{
        return {
            ...state,
            characters: action?.characters
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
