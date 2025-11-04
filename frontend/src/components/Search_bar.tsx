
import { Link } from "react-router-dom";
import Dropdown   from "./dropdown";

export default function Bar() {
    return (
        <nav className="bg-transparent fixed w-full z-50 py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">JobConnect</div>
        <div className="space-x-6 bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg flex items-center">
            <Link to="/" className="text-white hover:text-yellow-300 transition-colors">Home</Link>
            <Link to="/vagas" className="text-white hover:text-yellow-300 transition-colors">Vagas</Link>
            <Link to="/empresas" className="text-white hover:text-yellow-300 transition-colors">Empresas</Link>
            <Dropdown />
        </div>
        </nav>
    );
}
