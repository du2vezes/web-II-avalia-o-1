import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home  from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import { EmpresaCadastro } from "../pages/EmpresaCadastro";
import { CandidatoCadastro } from "../pages/CandidatoCadastro";
import { VagasCadastro } from "../pages/VagasCadastro";
import {VerVagas} from '../pages/VerVagas'
import { VagasEditar } from "../pages/VagasEditar";




export  function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/empresaCasdastro" element={< EmpresaCadastro/>} />
            <Route path="/candidatoCadastro" element={< CandidatoCadastro/>} />
            <Route path="/vervagas" element={<VerVagas/>}/>
            

            <Route path="/vagascadastro" element={
                <PrivateRoute>
                    < VagasCadastro/>
                </PrivateRoute>
            
            } />

            <Route
                path="/editar/:id"
                element={
                    <PrivateRoute>
                    <VagasEditar />
                    </PrivateRoute>
                }
                />
            <Route
                path="/editar/:id"
                element={
                    <PrivateRoute>
                    <VagasEditar />
                    </PrivateRoute>
                }
                />


        </Routes>


    
    );

}
export default AppRoutes