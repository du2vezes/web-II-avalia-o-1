import { Link} from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { useState } from "react";

export function CriarConta() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);



    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#0D1117] px-4">

            <img 
    
            alt="logo" 
            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 mb-5 transition-transform duration-300 hover:scale-105"
            />
            <div className="bg-[#161B22] text-[#C9D1D9] rounded-xl border border-[#30363D] p-6 sm:p-8 md:p-10 w-full max-w-sm shadow-lg">



                <form >
                    <div className="mb-4">
                        <label className="block mb-1 text-sm text-[#8B949E]">Nome</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Digite seu email"
                            className="w-full p-3 mb-3 text-[#C9D1D9] bg-[#0D1117] border border-[#30363D] rounded-lg focus:border-[#58A6FF] focus:outline-none text-sm sm:text-base"
                        />
                        </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-sm text-[#8B949E]">Email</label>
                        <input 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            className="w-full p-3 mb-3 text-[#C9D1D9] bg-[#0D1117] border border-[#30363D] rounded-lg focus:border-[#58A6FF] focus:outline-none text-sm sm:text-base"
                        />
                        </div>

                    <div className="relative mb-4">
                    <label className="block mb-1 text-sm text-[#8B949E]">Senha</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        className="w-full p-3 pr-10 text-[#C9D1D9] bg-[#0D1117] border border-[#30363D] rounded-lg focus:border-[#58A6FF] focus:outline-none text-sm sm:text-base"
                    />

                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[67%] -translate-y-1/2 bg-transparent border-none p-0 text-[#8B949E] hover:text-[#58A6FF] transition-colors"

                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
                    </button>

                    </div>



                    <button 
                        type="submit" 
                        className="w-full bg-[#238636] p-3 rounded-lg text-white mt-2 transition-all duration-200 hover:bg-[#2EA043] active:scale-95 text-sm sm:text-base"
                        >
                        CriarConta
                        </button>
                </form>

                <p className="text-center mt-5 text-[#8B949E] text-sm sm:text-base">
                    Ja tem conta? <Link to="/login" className="text-[#58A6FF]">Entrar</Link>
                    </p>
            </div>
        </div>
    );
}

