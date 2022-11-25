import { Navigate } from "react-router-dom";
import { AppRoutes } from "../routes";

export const PublicRouteHOC = ({Component}) =>{
    const user = JSON.parse(localStorage.getItem('user'))
    return user
        ? <Component />
        : <Navigate to={AppRoutes.noPerm} />
}
