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

// rickMortyActions.addCharacters([])
// rickMortyActions.addInfo({})

