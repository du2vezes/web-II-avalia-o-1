
import { useState } from "react";
import { Link} from "react-router-dom";

import DropdownMenuCustom from "../components/dropdown";

export function Bar() {


    return (
    
        <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 bg-[rgba(70,59,175,0.2)] shadow-md z-50">
        {/* Logo */}
        <Link to="/">
            <img
            src="/logo.png" 
            alt="Logo"
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

        {/* Avatar + Dropdown */}
        <div className="relative">
            <DropdownMenuCustom />
        </div>
        </header>
    );
}

export default Bar;
