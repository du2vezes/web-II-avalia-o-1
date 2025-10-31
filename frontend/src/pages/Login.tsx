
import  {api}  from "../lib/api";
import { useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AxiosError } from "axios";


function Login() {  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
        alert("Preencha todos os campos!");
        return;
        }

        try {
        const response = await api.post("token/", { username, password });

        const { access, refresh } = response.data;
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);

        alert("Login feito com sucesso!");
        navigate("/projeto");
        
        } catch (error: unknown) {
        const err = error as AxiosError<unknown>;
        if (err.response) {
            alert(err)
        } else {
            alert("Erro de rede. Tente novamente.");
        }
        }
    };

    return (
    <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 w-80 text-center shadow-lg text-white font-poppins">
        <h2 className="text-2xl font-semibold mb-6 tracking-wide">Login</h2>

        <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-full bg-white/15 text-white placeholder-gray-300 text-sm outline-none focus:bg-white/25 focus:ring-2 focus:ring-white/30 transition-all"
            />
            </div>

            <div className="relative">
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-full bg-white/15 text-white placeholder-gray-300 text-sm outline-none focus:bg-white/25 focus:ring-2 focus:ring-white/30 transition-all"
            />
            </div>

            <div className="flex justify-between items-center text-xs text-gray-300">
            <label className="flex items-center space-x-1">
                <input type="checkbox" className="accent-white" />
                <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-white underline">Forgot password?</a>
            </div>

            <button
            type="submit"
            className="w-full py-3 rounded-full bg-white text-gray-800 font-bold hover:bg-gray-100 hover:scale-105 transition-all"
            >
            Login
            </button>

            <p className="text-gray-300 text-sm mt-4">
            Don’t have an account? <Link to="/registrar" className="text-white underline">Register</Link>
            </p>
        </form>
        </div>
    </div>
    );

}

export default Login;
