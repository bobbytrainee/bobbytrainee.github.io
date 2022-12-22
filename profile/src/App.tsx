import './App.css';
import Ihor from "./pages/Ihor/Ihor";
import Bobby from "./pages/Bobby/Bobby";
import Header from "./components/Header/Header";
import { Routes, Route} from "react-router-dom";
import { AppRoutes, NestedRoutes } from "./common/routes";
import Main from "./pages/Main/Main";
import { PublicRouteHOC } from "./common/routesHOC/PublicRoute";
import NoPerm from "./pages/noPermissions/NOPermissions";
import {AdminRouteHOC, PrivateRoute} from "./common/routesHOC/AdminRoute";
import CustomRoute from "./components/CustomROute/CustomRoute";
import { HOC } from "./pages/HOC page/HOC_view_HOC";
import Form from "./pages/Form/Form";


function App() {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={AppRoutes.main} element={<Main/>}/>
                {/*<Route path={AppRoutes.noPerm} element={<NoPerm/>}/>*/}
                <Route path={AppRoutes.HOC} element={
                    <PrivateRoute Component={HOC}/>
                }/>


                {/*<Route path={AppRoutes.FORM} element={<Form />}/>*/}

                {/*<Route path={NestedRoutes.bobby} element={*/}
                {/*    <PublicRouteHOC Component={Bobby}/>*/}
                {/*}/> //user*/}

                {/*<Route path={NestedRoutes.ihor} element={*/}
                {/*    <AdminRouteHOC Component={Ihor}>*/}
                {/*        <Route path={AppRoutes.friends} element={<h1>Ihors friends</h1>}/>*/}
                {/*        <Route path={AppRoutes.custom} element={<CustomRoute />}/>*/}
                {/*    </AdminRouteHOC>*/}
                {/*}/> //user*/}


                <Route path={AppRoutes.notFound} element={<h1>Not found</h1>}/>
                <Route path='*' element={<h1>Not found</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
