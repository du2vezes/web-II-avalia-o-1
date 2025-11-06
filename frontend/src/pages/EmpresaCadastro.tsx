import foto from "../assets/empresacadastro.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { AxiosError } from "axios";

export function EmpresaCadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [areaAtuacao, setAreaAtuacao] = useState("");
    const [descricao, setDescricao] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Cadastrar empresa
            await api.post("v1/empresas/", {
                username: email, 
                nome,
                email,
                area_atuacao: areaAtuacao,
                descricao,
                password: senha
            });
            

            alert("Empresa cadastrada com sucesso! Faça login para continuar.");
            navigate("/login");
        }  catch (error: any) {
            console.error("Erro ao cadastrar empresa:", error.response?.data || error.message);
            
            if (error.response?.status === 400) {
                alert("Erro nos dados: " + JSON.stringify(error.response.data));
            } else if (error.response?.status === 401) {
                alert("Não autorizado. Verifique suas credenciais.");
            } else if (error.response?.status === 404) {
                alert("Endpoint não encontrado. Verifique a URL da API.");
            } else {
                alert("Erro ao cadastrar empresa: " + (error.response?.data?.message || error.message));
            }
        }
    };

    return (
        <section id="signup-form" className="bg-white font-poppins">
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Form Panel */}
            <div className="flex flex-col justify-center items-center px-6 sm:px-12 py-16">
            <div className="w-full max-w-md">
                {/* Form Header */}
                <div className="text-left">
                <h1 className="text-[32px] leading-[48px] font-medium text-black">
                    Comece agora
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                    Cadastre a sua empresa para começar a anunciar
                </p>
                </div>

                {/* Registration Form */}
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label
                    htmlFor="company-name"
                    className="block text-sm font-medium text-black leading-[21px]"
                    >
                    Nome
                    </label>
                    <input
                    type="text"
                    id="company-name"
                    name="company-name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite o nome da empresa"
                    className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black leading-[21px]"
                    >
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite o email da empresa"
                    className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="field-of-work"
                    className="block text-sm font-medium text-black leading-[21px]"
                    >
                    Área de atuação
                    </label>
                    <input
                    type="text"
                    id="field-of-work"
                    name="field-of-work"
                    value={areaAtuacao}
                    onChange={(e) => setAreaAtuacao(e.target.value)}
                    placeholder="Área de atuação da empresa"
                    className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="description"
                    className="block text-sm font-medium text-black leading-[21px]"
                    >
                    Descrição
                    </label>
                    <textarea
                    id="description"
                    name="description"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descreva a sua empresa"
                    className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                    ></textarea>
                </div>

                <div>
                    <label
                    htmlFor="password"
                    className="block text-sm font-medium text-black leading-[21px]"
                    >
                    Senha
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Cadastre uma senha"
                    className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                <div className="pt-4">
                    <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                    Cadastrar
                    </button>
                </div>
                </form>

                {/* Sign In Link */}
                <p className="mt-8 text-center text-sm font-medium text-black">
                Já tem uma conta?{" "}
                <Link
                    to="/login"
                    className="font-medium text-blue-700 hover:text-blue-600"
                >
                    Entrar
                </Link>
                </p>
            </div>
            </div>

            {/* Image Panel */}
            <div className="hidden lg:block relative">
            <img
                className="absolute inset-0 w-full h-full object-cover rounded-l-[45px]"
                src={ foto}
                alt="People working in a modern office environment."
            />
            </div>
        </div>
        </section>
    );
}
