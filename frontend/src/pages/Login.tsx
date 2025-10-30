import "@/styles/Login.css";
import { api } from "lib/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <div className="background">
        <div className="login-container"> 
            <h2>Login</h2>

            {/* 🔹 Conecta o formulário com a função */}
            <form onSubmit={handleLogin}>
            <div className="input-box">
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </div>

            <div className="input-box">
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

            <div className="options">
                <label>
                <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>

            <p className="register-text">
                Don’t have an account? <a href="#">Register</a>
            </p>
            </form>
        </div>
        </div>
    );
}

export default Login;
