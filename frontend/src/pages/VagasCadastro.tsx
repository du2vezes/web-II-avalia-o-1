import foto from "../assets/vaga.png";

export function VagasCadastro() {
    
        return (
        <section id="section-form-page" className="bg-white font-poppins">
        <div className="min-h-screen flex items-stretch">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">

            {/* Form Column */}
            <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16">
                <div className="w-full max-w-md">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-black text-[32px] font-medium leading-[48px]">Cadastrar vaga</h1>
                    <p className="text-black text-sm font-medium leading-[21px] mt-2">
                    Anuncie a vaga disponível na sua empresa
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                    <label htmlFor="job-title" className="block text-black text-sm font-medium leading-[21px] mb-2">
                        Vaga disponível
                    </label>
                    <input
                        type="text"
                        id="job-title"
                        placeholder="Digite o cargo da vaga disponível"
                        className="w-full border border-form-border rounded-[10px] p-2.5 text-sm placeholder:text-form-placeholder placeholder:text-[10px] placeholder:font-medium focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition"
                    />
                    </div>

                    <div>
                    <label htmlFor="requirements" className="block text-black text-sm font-medium leading-[21px] mb-2">
                        Requisitos
                    </label>
                    <input
                        type="text"
                        id="requirements"
                        placeholder="Digite os requisitos necessários para a vaga"
                        className="w-full border border-form-border rounded-[10px] p-2.5 text-sm placeholder:text-form-placeholder placeholder:text-[10px] placeholder:font-medium focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition"
                    />
                    </div>

                    <div>
                    <label htmlFor="description" className="block text-black text-sm font-medium leading-[21px] mb-2">
                        Descrição
                    </label>
                    <textarea
                        id="description"
                        rows={3}
                        placeholder="Descreva como será o trabalho oferecido"
                        className="w-full border border-form-border rounded-[10px] p-2.5 text-sm placeholder:text-form-placeholder placeholder:text-[10px] placeholder:font-medium focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition"
                    ></textarea>
                    </div>

                    <div>
                    <label htmlFor="salary" className="block text-black text-sm font-medium leading-[21px] mb-2">
                        Salário
                    </label>
                    <input
                        type="text"
                        id="salary"
                        placeholder="Digite o salário oferecido"
                        className="w-full border border-form-border rounded-[10px] p-2.5 text-sm placeholder:text-form-placeholder placeholder:text-[10px] placeholder:font-medium focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition"
                    />
                    </div>

                    <div className="pt-6">
                    <button
                        type="submit"
                        className="w-full bg-button-bg text-white font-bold text-[13px] leading-[19.5px] py-3 rounded-[10px] hover:bg-gray-800 transition-colors"
                    >
                        Cadastrar
                    </button>
                    </div>
                </form>
                </div>
            </div>

            {/* Image Column */}
            <div className="hidden lg:block">
                <img
                src={foto}
                alt="A collage of professionals from various fields including chefs, nurses, mechanics, and office workers."
                className="w-full h-full object-cover rounded-l-[45px]"
                />
            </div>

            </div>
        </div>
        </section>
    );
}