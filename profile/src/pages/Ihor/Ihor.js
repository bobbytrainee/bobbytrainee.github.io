import Button from "../../components/Button";
import { Link, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../common/routes";
import CustomRoute from "../../components/CustomROute/CustomRoute";
import { Outlet } from "react-router-dom";

const Ihor = () => {
    console.log("ihor")
    const handleButtonClick = () => {
        console.log("CLICK")
    }
    return(
        <div className='wrapper'>
            <h3>Ihor</h3>
            <span>Ihors changes</span>
            <Button title='Click me' handleClick={handleButtonClick}/>
            <Link to={AppRoutes.ihor + AppRoutes.friends}>go to friends</Link>
            <Outlet />
        </div>
    )
};
export default Ihor
