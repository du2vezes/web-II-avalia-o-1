

export function EmpresaCadastro() {
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
            <form className="mt-8 space-y-5">
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
                  placeholder="Digite o nome da empresa"
                  className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                  placeholder="Digite o email da empresa"
                  className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                  placeholder="Área de atuação da empresa"
                  className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                  placeholder="Descreva a sua empresa"
                  className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                  placeholder="Cadastre uma senha"
                  className="mt-2 block w-full p-2.5 border border-gray-300 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
              <a
                href="#"
                className="font-medium text-blue-700 hover:text-blue-600"
              >
                Entrar
              </a>
            </p>
          </div>
        </div>

        {/* Image Panel */}
        <div className="hidden lg:block relative">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-l-[45px]"
            src="/assets/287b808d17517f74211f5d0f2b76111159a7b042.png"
            alt="People working in a modern office environment."
          />
        </div>
      </div>
    </section>
  );
}

