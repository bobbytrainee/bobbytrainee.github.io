import { Navigate, Route } from "react-router-dom";
import { AppRoutes } from "../routes";
import { userTypes } from "../constants";
import Ihor from "../../pages/Ihor/Ihor";
import CustomRoute from "../../components/CustomROute/CustomRoute";

export const AdminRouteHOC = ({Component, children}) =>{
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role === userTypes.admin
        ? <Component>
            {children}
        </Component>
        : <Navigate to={AppRoutes.noPerm} />

}
