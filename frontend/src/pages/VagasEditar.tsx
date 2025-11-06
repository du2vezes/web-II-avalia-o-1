import foto from "../assets/vaga.png";
import { api } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";

export function VagasEditar() {
    const { id } = useParams();
    const [titulo, setTitulo] = useState("");
    const [requisitos, setRequisitos] = useState("");
    const [descricao, setDescricao] = useState("");
    const [salario, setSalario] = useState("");
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // Carregar dados da vaga ao abrir
    useEffect(() => {
        const fetchVaga = async () => {
        try {
            const response = await api.get(`v1/vagas/${id}/`);
            const vaga = response.data;
            setTitulo(vaga.titulo);
            setRequisitos(vaga.requisitos);
            setDescricao(vaga.descricao);
            setSalario(vaga.salario);
        } catch (error) {
            console.error("Erro ao carregar vaga:", error);
            alert("Erro ao carregar os dados da vaga.");
        } finally {
            setLoading(false);
        }
        };

        if (id) fetchVaga();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        await api.patch(`v1/vagas/${id}/`, {
            titulo,
            descricao,
            requisitos,
            salario: Number(salario),
        });

        alert("Vaga atualizada com sucesso!");
        navigate("/vervagas");
        } catch (error: unknown) {
        const err = error as AxiosError;
        if (err.response) {
            alert(`Erro: ${JSON.stringify(err.response.data)}`);
        } else {
            alert("Erro de rede. Tente novamente.");
        }
        }
    };

    if (loading) {
        return (
        <div className="flex justify-center items-center h-screen text-gray-600">
            Carregando dados da vaga...
        </div>
        );
    }

    return (
        <section id="section-edit-page" className="bg-white font-poppins">
        <div className="min-h-screen flex items-stretch">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            {/* Formulário */}
            <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16">
                <div className="w-full max-w-md">
                <div className="mb-10">
                    <h1 className="text-black text-[32px] font-medium leading-[48px]">
                    Editar vaga
                    </h1>
                    <p className="text-black text-sm font-medium leading-[21px] mt-2">
                    Atualize as informações da vaga publicada
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                    <label
                        htmlFor="job-title"
                        className="block text-black text-sm font-medium mb-2"
                    >
                        Vaga disponível
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setTitulo(e.target.value)}
                        value={titulo}
                        id="job-title"
                        className="w-full border rounded-[10px] p-2.5 text-sm focus:ring-2 focus:ring-gray-400 outline-none transition"
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="requirements"
                        className="block text-black text-sm font-medium mb-2"
                    >
                        Requisitos
                    </label>
                    <input
                        type="text"
                        onChange={(e) => setRequisitos(e.target.value)}
                        value={requisitos}
                        id="requirements"
                        className="w-full border rounded-[10px] p-2.5 text-sm focus:ring-2 focus:ring-gray-400 outline-none transition"
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="description"
                        className="block text-black text-sm font-medium mb-2"
                    >
                        Descrição
                    </label>
                    <textarea
                        id="description"
                        rows={3}
                        onChange={(e) => setDescricao(e.target.value)}
                        value={descricao}
                        className="w-full border rounded-[10px] p-2.5 text-sm focus:ring-2 focus:ring-gray-400 outline-none transition"
                    ></textarea>
                    </div>

                    <div>
                    <label
                        htmlFor="salary"
                        className="block text-black text-sm font-medium mb-2"
                    >
                        Salário
                    </label>
                    <input
                        type="text"
                        id="salary"
                        onChange={(e) => setSalario(e.target.value)}
                        value={salario}
                        className="w-full border rounded-[10px] p-2.5 text-sm focus:ring-2 focus:ring-gray-400 outline-none transition"
                    />
                    </div>

                    <div className="pt-6">
                    <button
                        type="submit"
                        className="w-full bg-gray-600 text-white font-bold text-[13px] py-3 rounded-[10px] hover:bg-gray-800 transition-colors"
                    >
                        Atualizar
                    </button>
                    </div>
                </form>
                </div>
            </div>

            {/* Imagem */}
            <div className="hidden lg:block">
                <img
                src={foto}
                alt="Profissionais trabalhando"
                className="w-full h-full object-cover rounded-l-[45px]"
                />
            </div>
            </div>
        </div>
        </section>
    );
}
