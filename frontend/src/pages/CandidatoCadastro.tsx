import { useState } from "react";
import foto from "../assets/candidato.png";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../api/api";
import type { AxiosError } from "axios";
import Bar from "../components/Search_bar";

export function CandidatoCadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [curriculo, setCurriculo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post("v1/candidatos/", {
                username: email,
                nome,
                email,
                curriculo,
                password: senha
            });

            alert("Candidato cadastrado com sucesso! Faça login para continuar.");
            navigate("/login");

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
        <section id="section-signup-form" className="bg-white font-poppins">
            <Bar/><div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
                {/* Form Column */}
                <div className="flex flex-col justify-center items-center p-8 sm:p-12">
                    <div className="w-full max-w-md">
                        <h1 className="text-[32px] font-medium leading-[48px] text-black">Comece agora</h1>
                        <p className="mt-2 text-sm font-medium text-black">Se cadastre para começar a procurar a sua vaga</p>

                        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Digite o seu nome completo"
                                    className="mt-1 block w-full rounded-[10px] border border-gray-300 p-2.5 text-sm placeholder:text-gray-300 placeholder:text-xs focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Digite o seu email"
                                    className="mt-1 block w-full rounded-[10px] border border-gray-300 p-2.5 text-sm placeholder:text-gray-300 placeholder:text-xs focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="curriculo" className="block text-sm font-medium text-black">Currículo</label>
                                <input
                                    type="text"
                                    id="curriculo"
                                    onChange={(e) => setCurriculo(e.target.value)}
                                    placeholder="Envie o seu currículo"
                                    className="mt-1 block w-full rounded-[10px] border border-gray-300 p-2.5 text-sm placeholder:text-gray-300 placeholder:text-xs focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-black">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="Cadastre uma senha"
                                    className="mt-1 block w-full rounded-[10px] border border-gray-300 p-2.5 text-sm placeholder:text-gray-300 placeholder:text-xs focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-700 text-white font-bold text-sm py-3 rounded-[10px] hover:bg-gray-800 transition-colors"
                            >
                                Cadastrar
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm font-medium text-black">
                            Já tem uma conta? <Link to="/login" className="font-medium text-blue-700 hover:underline">Entrar</Link>
                        </p>
                    </div>
                </div>

                {/* Image Column */}
                <div className="hidden lg:block">
                    <img
                        src={foto}
                        alt="A person working on a laptop in a modern office at night."
                        className="h-full w-full object-cover rounded-l-[45px]"
                    />
                </div>
            </div>
        </section>
    );
}
