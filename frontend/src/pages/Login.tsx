import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { api } from "../api/api";
import { useAuthStore } from "../store/authStore";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
        alert("Preencha todos os campos!");
        return;
        }

        try {
        const response = await api.post("token/", { username, password });
        const { access, refresh } = response.data;

        login(access, refresh);

        alert("Login feito com sucesso!");
        navigate("/");
        } catch (error: unknown) {
        const err = error as AxiosError;
        if (err.response) {
            alert(`Erro: ${JSON.stringify(err.response.data)}`);
        } else {
            alert("Erro de rede. Tente novamente.");
        }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 w-80 text-center shadow-lg text-white font-poppins">
            <h2 className="text-3xl font-semibold mb-6 tracking-wide">Bem-vindo</h2>
            <p className="text-gray-300 text-sm mb-6">Entre com sua conta para continuar</p>

            <form onSubmit={handleLogin} className="space-y-5">
            {/* Username */}
            <div className="relative">
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 text-sm outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/40 transition-all"
                />
            </div>

            {/* Password */}
            <div className="relative">
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 text-sm outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/40 transition-all"
                />
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-xs text-gray-300">
                <label className="flex items-center space-x-1">
                <input type="checkbox" className="accent-white" />
                <span>Lembrar-me</span>
                </label>
                <a href="#" className="hover:text-white underline">Esqueceu a senha?</a>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full py-3 rounded-full bg-white text-gray-800 font-bold hover:bg-gray-100 hover:scale-105 transition-all"
            >
                Entrar
            </button>
            </form>

            
        </div>
        </div>
    );
}

export default Login;
