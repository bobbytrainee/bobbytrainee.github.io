import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HOCview from "./HOC_view";
import { CharacterAPI, LocationsAPI } from "../../api/api";
import { rickMortyActions } from "../../redux/actions/rickMortyActions";
import { useDispatch } from "react-redux";

const HOCComponentWithState = ({Component}) => {
    const dispatch = useDispatch();
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
                dispatch(rickMortyActions.addCharacters(fetchData.data.results))
                dispatch(rickMortyActions.addInfo(fetchData.data.info))
                const arr = fetchData?.data.results?.map((item, index) => index < counter && item)
                console.log(arr)
                setUserData(arr)
            })

        // LocationsAPI.getCharacters()
        //     .then(res => console.log(res.data))
        //     .catch(e => console.log(e.message))
        //
    }, [])

    // useEffect(() => {
    //     const arr = data?.map((item, index) => index < counter && item)
    //     console.log(arr)
    //     setUserData(arr)
    // }, [ counter ])

    return (
        <Component
            counter={counter}
            setCounter={setCounter}
        />
    )
}

export const HOC = () => <HOCComponentWithState Component={HOCview}/>;
