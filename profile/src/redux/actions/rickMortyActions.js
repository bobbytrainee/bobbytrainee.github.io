import { useDispatch } from "react-redux";
import { CharacterAPI } from "../../api/api";

export const ActionTypes = {
    SET_CHARACTERS: 'SET_CHARACTERS',
    SET_INFO: 'SET_CHARACTERS_INFO',
    SET_ERROR: 'SET_ERROR',
}

export const rickMortyActions = {
    addCharacters:(characters)=>({type: ActionTypes.SET_CHARACTERS, characters}),
    addInfo:(info)=>({type: ActionTypes.SET_INFO, info}),
    setError:(error)=>({type: ActionTypes.SET_ERROR, error})
}


export const getCharactersThunk = (a, someFunc) => async (dispatch)=> {
    await CharacterAPI.getCharacters("12345")
        .then((fetchData) => {
            console.log('THEN')
            dispatch(rickMortyActions.addCharacters(fetchData.data.results))
            dispatch(rickMortyActions.addInfo(fetchData.data.info))
            someFunc()
        })
        .catch(e=>{
        })
    console.log(a)

}

