import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "../../common/routes";
import styles from './Bobby.module.scss'
const Bobby = () => {
// const location = useLocation();
// useEffect(()=>{
//     console.log(location)
// },[])
    return (
        <div>
            <h1>hello</h1>
            <div className={styles.container}>
                <h3>Bobby page</h3>
                <span>Bobby changes</span>
            </div>
            <Routes>
                <Route path={AppRoutes.friends} element={<h1>Bobby friends</h1>}/>
            </Routes>
        </div>

    )
};
export default Bobby;
