import { useEffect } from "react";

function useGetDataHook(needGetData, getCharacters){
    useEffect(()=>{
        needGetData && getCharacters()
    },[needGetData])

}
export default useGetDataHook;
