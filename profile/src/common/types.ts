import {AppStateType, PropertiesTypes} from "../redux/store";
import {rickMortyActions} from "../redux/actions/rickMortyActions";
import {ThunkAction} from "redux-thunk";

interface NameUrl {
    name: string,
    url: string,
}
export interface RMData {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: NameUrl,
    location: NameUrl,
    image: string,
    episode: string[],
    url: string,
    created: string;
}

export type RMReducerActionTypes = ReturnType<
    PropertiesTypes<typeof rickMortyActions>
    >

interface InfoType {
        count: number,
        pages: number,
        next: string,
        prev: null | string
}

export type RMThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    RMReducerActionTypes>
