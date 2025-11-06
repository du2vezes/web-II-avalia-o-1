import { useEffect, useState } from "react";
import { api } from "../api/api";
import type { Vaga } from "../types/index";
import Bar from "../components/Search_bar";
import BtnEditar from "../components/BtnEditar";
import BtnDeletar from "../components/BtnDeletar";

export const VerVagas = () => {
    const [vagas, setVagas] = useState<Vaga[]>([]);
    const [loading, setLoading] = useState(true);
    const tipo = localStorage.getItem("tipo");

    useEffect(() => {
        let mounted = true;

        const fetchVagas = async () => {
        try {
            const response = await api.get("v1/vagas/");
            const resp = response.data;

            if (!mounted) return;

            if (Array.isArray(resp)) {
            setVagas(resp);
            } else if (resp && Array.isArray(resp.results)) {
            setVagas(resp.results);
            } else if (resp && Array.isArray(resp.data)) {
            setVagas(resp.data);
            } else {
            console.warn("Formato inesperado da resposta de vagas:", resp);
            setVagas([]);
            }
        } catch (err) {
            console.error("Erro ao carregar vagas:", err);
            if (mounted) setVagas([]);
        } finally {
            if (mounted) setLoading(false);
        }
        };

        fetchVagas();
        return () => {
        mounted = false;
        };
    }, []);

    if (loading) {
        return (
        <div className="flex items-center justify-center min-h-[300px] text-gray-700 text-lg">
            Carregando vagas...
        </div>
        );
    }

    return (
        <>
        {/* Barra fixa no topo */}
        <div className="fixed top-0 left-0 ">
            <Bar />
        </div>

        {/* Seção principal */}
        <section className="mt-28 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 md:mb-0">
                Vagas Disponíveis
            </h1>
            </div>

            {vagas.length === 0 ? (
            <div className="text-center text-gray-600 text-lg py-10 bg-gray-100 rounded-lg shadow-sm">
                Nenhuma vaga disponível no momento.
            </div>
            ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {vagas.map((vaga, index) => (
                <article
                    key={vaga.id ?? index}
                    className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    {/* Mostra botão de editar apenas se for empresa */}
                    {tipo === "Empresa" && (
                    <div className="absolute top-4 right-4">
                        <BtnEditar vagaId={vaga.id} />
                        <BtnDeletar vagaId={vaga.id} />
                    </div>
                    )}

                    <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        {vaga.titulo}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {vaga.empresa_nome || "Empresa confidencial"}
                    </p>
                    </div>

                    <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                    {vaga.descricao || "Sem descrição disponível."}
                    </p>

                    <div className="text-gray-600 text-sm space-y-1 mb-4">
                    <p>
                        <strong className="text-gray-800">Requisitos:</strong>{" "}
                        {vaga.requisitos || "Não especificado"}
                    </p>
                    <p>
                        <strong className="text-gray-800">Salário:</strong>{" "}
                        {vaga.salario
                        ? `R$ ${vaga.salario.toLocaleString()}`
                        : "A combinar"}
                    </p>
                    </div>

                    {/* Se não for empresa, mostra o botão de candidatar */}
                    {tipo !== "Empresa" && (
                    <button className="w-full bg-gray-700 text-white font-bold text-sm py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        Me candidatar
                    </button>
                    )}
                </article>
                ))}
            </div>
            )}
        </section>
        </>
    );
};
