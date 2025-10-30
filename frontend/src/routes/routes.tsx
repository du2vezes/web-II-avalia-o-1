import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import {CriarConta}from "../pages/CriarConta";
import { Projeto } from "../pages/Projeto";
import { Home } from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

export  function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/registrar" element={<CriarConta />} />
            <Route path="/login" element={<Login />} />
            
            
            <Route
                path="/projeto"
                element={
                    <PrivateRoute>
                        <Projeto/>
                    </PrivateRoute>
                }
            />

        </Routes>


    
    );

}
export default AppRoutes