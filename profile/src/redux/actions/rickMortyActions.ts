import { useDispatch } from "react-redux";
import { CharacterAPI } from "../../api/api";
import {RMData, RMThunkType} from "../../common/types";

export enum ActionTypes {
    SET_CHARACTERS='SET_CHARACTERS',
    SET_INFO = 'SET_CHARACTERS_INFO',
    SET_ERROR ='SET_ERROR',
}

class InfoType {
}

export const rickMortyActions = {
    addCharacters:(characters:RMData[])=>({type: ActionTypes.SET_CHARACTERS, characters} as const),
    addInfo:(info: InfoType)=>({type: ActionTypes.SET_INFO, info} as const),
    setError:(error: any)=>({type: ActionTypes.SET_ERROR, error} as const)
}


export const getCharactersThunk = ():RMThunkType => async (dispatch)=> {
        await CharacterAPI.getCharacters("12345")
        .then((fetchData) => {
            dispatch(rickMortyActions.addCharacters(fetchData.data.results))
            dispatch(rickMortyActions.addInfo(fetchData.data.info))
        })
        .catch(e=>{
        })

}

