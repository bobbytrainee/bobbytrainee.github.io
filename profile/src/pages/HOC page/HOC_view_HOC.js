import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HOCview from "./HOC_view";
import { CharacterAPI, LocationsAPI } from "../../api/api";
import { getCharactersThunk, rickMortyActions } from "../../redux/actions/rickMortyActions";
import { useDispatch, useSelector } from "react-redux";
import { logDOM } from "@testing-library/react";
import useGetDataHook from "../../components/customHook/useGetDataHook";

const HOCComponent = ({Component}) => {
    const dispatch = useDispatch();
    const [ counter, setCounter ] = useState(5)
    const [ needGetData, setNeedGetData] = useState(false)
    const [specifData, setSpecData] = useState([])
    const {REACT_APP_RICK_MORTY} = process.env
    const obj = process.env
    const getCharacters = (a, someFunc) => dispatch(getCharactersThunk(a, someFunc))
    const data = useSelector(store => store.rickMorty.characters)
    const checkTODO = ()=>{
            alert('HE')
        console.log('SUCCESS')
    }

    useGetDataHook(needGetData, getCharacters, checkTODO, setSpecData);
    useEffect(() => {
        setTimeout(()=> setNeedGetData(true), 5000)
    }, [])


    return (
        <Component
            counter={counter}
            setCounter={setCounter}
            data={data}
        />
    )
}

export const HOC = () => <HOCComponent Component={HOCview}/>;
