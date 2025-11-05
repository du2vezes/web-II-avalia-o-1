// src/components/Home.jsx

import fundo from "../assets/fundoHome.png";
import Bar from "../components/Search_bar";
import rodape from "../assets/rodape.png";

export default function Home () {
    return (
        <div className="bg-white flex flex-col min-h-screen">
        <Bar />
        {/* Hero Section */}
        <section className="relative w-full h-[545px] flex items-center justify-center text-white pt-20">
        {/* Imagem de fundo */}
        <img
            src={fundo}
            alt="JobConnect Banner"
            className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Conteúdo centralizado */}
        <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            JobConnect é uma plataforma que conecta candidatos e empresas,
            facilitando o processo de recrutamento.
            </h1>
            <p className="text-xl">
            Cadastre vagas, empresas e currículos de forma rápida e organizada.
            </p>
        </div>

        </section>

        

        {/* Section - Opções */}
        <section className="text-center py-16 px-4">
            <h2 className="text-4xl font-bold mb-8">Sua primeira vez no site?</h2>
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="bg-gray-100 border border-white shadow-md rounded-2xl p-6 w-full max-w-sm">
                <h3 className="text-2xl font-bold mb-4">Candidato</h3>
                <p className="text-gray-600 text-lg">
                Cadastre seu perfil profissional, envie seu currículo e encontre
                vagas que combinam com você.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 border border-white shadow-md rounded-2xl p-6 w-full max-w-sm">
                <h3 className="text-2xl font-bold mb-4">Empresa</h3>
                <p className="text-gray-600 text-lg">
                Publique oportunidades de trabalho e encontre candidatos
                qualificados para sua equipe.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 border border-white shadow-md rounded-2xl p-6 w-full max-w-sm">
                <h3 className="text-2xl font-bold mb-4">Seguro e Rápido</h3>
                <p className="text-gray-600 text-lg">
                Acesse de forma segura com autenticação JWT e dados protegidos.
                </p>
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-700 text-white mt-auto py-10 px-8">
            <div className="grid md:grid-cols-3 gap-8">
            {/* Coluna 1 */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Navegação</h3>
                <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>Ver Vagas Disponíveis</li>
                <li>Cadastrar-se como Candidato</li>
                <li>Cadastrar-se como Empresa</li>
                <li>Sobre nós</li>
                </ul>
            </div>

            {/* Coluna 2 */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Políticas</h3>
                <ul className="space-y-2 text-sm">
                <li>Termos de Uso</li>
                <li>Termos de Serviço</li>
                <li>Privacidade</li>
                <li>FAQ</li>
                </ul>
            </div>

            {/* Coluna 3 */}
            <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold mb-3">
                Faça parte da nossa jornada
                </h3>
                <img
                src={rodape}
                alt="JobConnect Logo"
                className="mx-auto md:ml-auto md:mr-0 w-64 rounded shadow"
                />
            </div>
            </div>

            <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm">
            <p>© 2025 JobConnect — Desenvolvido por Zeduron | WEB II</p>
            <p>Versão da API: v1</p>
            </div>
        </footer>
        </div>
    );
};

