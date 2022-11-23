import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Ihor from "./pages/Ihor/Ihor";
import Bobby from "./pages/Bobby/Bobby";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { AppRoutes, NestedRoutes } from "./common/routes";

function App() {
  return (
   <div>
    <Header/>
     <Routes>
       <Route path={AppRoutes.main} element={<h1>Main</h1>}/>
       <Route path={NestedRoutes.bobby} element={<Bobby/>}/>
       <Route path={NestedRoutes.ihor} element={<Ihor/>}/>
       <Route path='*' element={<h1>Not found</h1>}/>
     </Routes>
   </div>
  );
}

export default App;
