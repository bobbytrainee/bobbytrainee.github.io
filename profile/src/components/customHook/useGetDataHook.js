import { useEffect } from "react";

function useGetDataHook(a, b, c, d){
    useEffect(()=>{
        a && getData()
    },[a])

    const getData = ()=>{
        b('hello', c)
        d([1,2,3])
    }

}
export default useGetDataHook;
