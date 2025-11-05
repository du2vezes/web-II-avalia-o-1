import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import {CriarConta}from "../pages/CriarConta";

import Home  from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import { EmpresaCadastro } from "../pages/EmpresaCadastro";

export  function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/registrar" element={<CriarConta />} />
            <Route path="/login" element={<Login />} />
            <Route path="/empresaCasdastro" element={
                <PrivateRoute>
                    < EmpresaCadastro/>
                </PrivateRoute>
            
            } />


            
            
        

        </Routes>


    
    );

}
export default AppRoutes