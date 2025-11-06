import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home  from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import { EmpresaCadastro } from "../pages/EmpresaCadastro";
import { CandidatoCadastro } from "../pages/CandidatoCadastro";
import { VagasCadastro } from "../pages/VagasCadastro";

export  function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/empresaCasdastro" element={< EmpresaCadastro/>} />
            <Route path="/candidatoCasdastro" element={< CandidatoCadastro/>} />
            <Route path="/vagascadastro" element={
                <PrivateRoute>
                    < VagasCadastro/>
                </PrivateRoute>
            
            } />

        </Routes>


    
    );

}
export default AppRoutes