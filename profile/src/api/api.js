import axios from "axios";
import { Endpoints } from "./Endpoints";

const baseUrl = 'https://rickandmortyapi.com/api'

const {REACT_APP_RICK_MORTY} = process.env

const instance = axios.create({
    baseURL: REACT_APP_RICK_MORTY,
    headers: {
        "Content-Type": "application/json",
    },
})

const tokenInstance = (token) => axios.create({
    baseURL: REACT_APP_RICK_MORTY,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
})


export const CharacterAPI = {
    getCharacters(token) {
        // return axios.get(baseUrl+Endpoints.characters)
        return instance.get(Endpoints.characters)
    }
}

export const LocationsAPI = {
    getCharacters(token) {
        // return axios.get(baseUrl+Endpoints.characters)
        return instance.put(Endpoints.locations,{user: 'bobby', role: 'student'})
    }
}
