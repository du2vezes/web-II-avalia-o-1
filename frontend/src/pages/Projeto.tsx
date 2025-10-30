import Bar from '../components/Search_bar';

export function Projeto() {
    return (
        <div>
        <Bar/>
        <div className="bg-[#0D1117] min-h-screen w-full px-4 pt-24 flex flex-col items-center">
        {/* pt-24 para dar espaço para a navbar fixa */}

        <div className="mt-20  bg-[#161B22] text-[#C9D1D9] rounded-xl border border-[#30363D] p-8 sm:p-10 md:p-10 w-full max-w-sm shadow-lg">
            
            <div className="mb-4">
            <label className="block mb-1 text-sm text-[#8B949E]">Nome do Projeto</label>
            <input 
                placeholder="Nome do Projeto"
                className="w-full p-3 mb-3 text-[#C9D1D9] bg-[#0D1117] border border-[#30363D] rounded-lg focus:border-[#58A6FF] focus:outline-none text-sm sm:text-base"
            />
            </div>

            <div className="mb-4 relative">
            <label className="block mb-1 text-sm text-[#8B949E]">Descrição</label>
            <input
                placeholder="Descrição"
                className="w-full p-3 pr-10 text-[#C9D1D9] bg-[#0D1117] border border-[#30363D] rounded-lg focus:border-[#58A6FF] focus:outline-none text-sm sm:text-base"
            />
            </div>

            <button 
            type="submit" 
            className="w-full bg-[#238636] p-3 rounded-lg text-white mt-2 transition-all duration-200 hover:bg-[#2EA043] active:scale-95 text-sm sm:text-base"
            >
            Entrar
            </button>

        </div>
        </div>
        </div>
    );
}
