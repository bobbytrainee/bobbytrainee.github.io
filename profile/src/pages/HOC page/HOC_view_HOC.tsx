import { useEffect, useState, FC } from "react";
import HOCview from "./HOC_view";
import { getCharactersThunk, rickMortyActions } from "../../redux/actions/rickMortyActions";
import { useDispatch, useSelector } from "react-redux";
import useGetDataHook from "../../components/customHook/useGetDataHook";
import {RMData} from "../../common/types";
import {AppStateType} from "../../redux/store";

type PropType = {
    counter: number,
    setCounter: (n:number)=>void,
    data: RMData[],
}
interface Props {
 Component: FC<PropType>
}

const HOCComponent:FC<Props> = ({Component}) => {
    const dispatch = useDispatch();
    const [ counter, setCounter ] = useState<number>(5)
    const [ needGetData, setNeedGetData] = useState<boolean>(false)
    //@ts-ignore
    const getCharacters = () => dispatch(getCharactersThunk())
    const data = useSelector((store:any) => store.rickMorty.characters)

    useGetDataHook(needGetData, getCharacters);
    useEffect(() => {
        setNeedGetData(true)
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
