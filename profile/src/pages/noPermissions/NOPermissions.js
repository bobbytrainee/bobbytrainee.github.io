import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../common/routes";

const NoPerm = () => {
const [seconds, setSeconds] = useState(5)
const navigate = useNavigate();
    useEffect(()=>{
       const  interval = setInterval(()=>{
           seconds !== 0
               ? setSeconds((prevState) => prevState-1)
               : clearInterval(interval)
        }, 1000)

        seconds === 0 && navigate(AppRoutes.main)

        return ()=> clearInterval(interval)
    },[seconds])



    return(
        <div>
            <h3>You have no permissions</h3>
            <p>You will be redirected in {seconds} seconds to main Page</p>
        </div>
    )
};
export default NoPerm
