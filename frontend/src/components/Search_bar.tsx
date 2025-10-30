import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/store";
import { logout } from "../lib/store/slices/AuthSlice";

export function Bar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    const [menuOpen, setMenuOpen] = useState(false);

    
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("token"); // Remove o token salvo no navegador
        setMenuOpen(false); // Fecha o menu
        navigate("/login"); // Redireciona pra tela de login
    };

    return (
        <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 bg-[rgba(70,59,175,0.205)] shadow-md]">
        
        {/* Logo */}
        <Link to="/">
            <img
            alt="logo"
            className="w-16 sm:w-20 md:w-28 lg:w-36 xl:w-44 transition-transform duration-300 hover:scale-105"
            />
        </Link>

        {/* Barra de pesquisa */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%]">
            <div className="relative">
            <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-full
                text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]
                focus:outline-none focus:ring-2 focus:ring-[#463baf]/40"
            />
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-transparent border-none outline-none"
                style={{
                backgroundImage:
                    "url('https://cdn-icons-png.flaticon.com/512/622/622669.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "18px 18px",
                }}
            ></button>
            </div>
        </div>

        {/* Avatar + menu dropdown */}
        <div className="relative">
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full overflow-hidden w-12 h-12 bg-gray-700"
            ></button>

            {/* Dropdown */}
            <div
            className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
            >
            {/* Opções do menu */}
            {!isAuthenticated ? (
                <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
                >
                Login
                </Link>
            ) : (
                <>
                <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                >
                    Perfil
                </Link>
                <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                >
                    Configurações
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 border-t border-gray-200"
                >
                    Sair
                </button>
                </>
            )}
            </div>
        </div>
        </header>
    );
}

export default Bar;
