import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home  from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import { EmpresaCadastro } from "../pages/EmpresaCadastro";
<<<<<<< HEAD
import { CandidatoCadastro } from "../pages/CandidatoCadastro";
import { VagasCadastro } from "../pages/VagasCadastro";
=======
>>>>>>> c32c169e90fe5ca91b0d8f6763c2409f45b9796a

export  function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
<<<<<<< HEAD
            <Route path="/empresaCasdastro" element={< EmpresaCadastro/>
=======
            <Route path="/empresaCasdastro" element={
                <PrivateRoute>
                    < EmpresaCadastro/>
                </PrivateRoute>
            
            } />


            
            
>>>>>>> c32c169e90fe5ca91b0d8f6763c2409f45b9796a
        
            
            } />
            <Route path="/candidatoCasdastro" element={< CandidatoCadastro/>

            
            } />
            <Route path="/vagascadastro" element={
                <PrivateRoute>
                    < VagasCadastro/>
                </PrivateRoute>
            
            } />

        </Routes>


    
    );

}
export default AppRoutes