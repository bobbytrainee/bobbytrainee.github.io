import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HOCview from "./HOC_view";
import { CharacterAPI, LocationsAPI } from "../../api/api";

const HOCComponentWithState = ({Component}) => {
    const [ data, setData ] = useState([])
    const [ userData, setUserData ] = useState([])
    const [ counter, setCounter ] = useState(5)
    const {REACT_APP_RICK_MORTY} = process.env
    const obj = process.env

    console.log('REACT_APP_RICK_MORTY',obj)
    const user = {
        name: 'bobby',
        role: 'student'
    }
    useEffect(() => {
        CharacterAPI.getCharacters("12345")
            .then((fetchData) => {
                setData(fetchData.data.results)
                const arr = fetchData?.data.results?.map((item, index) => index < counter && item)
                setUserData(arr)
            })

        LocationsAPI.getCharacters()
            .then(res => console.log(res.data))
            .catch(e => console.log(e.message))

        // fetch(`https://rickandmortyapi.com/api/character`, {
        //     method: 'GET',
        //     // body: JSON.stringify(user)
        // })
        //     .then((res) => res.json())
        //     .then((fetchData) => {
        //         setData(fetchData.results)
        //         const arr = fetchData.results.map((item, index) => index < counter && item)
        //         setUserData(arr)
        //     })
    }, [])

    useEffect(() => {
        const arr = data?.map((item, index) => index < counter && item)
        console.log(arr)
        setUserData(arr)
    }, [ counter ])

    return (
        <Component
            data={userData}
            counter={counter}
            setCounter={setCounter}
        />
    )
}

export const HOC = () => <HOCComponentWithState Component={HOCview}/>;
