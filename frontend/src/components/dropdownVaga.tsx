import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function DropdownMenuCustom() {
    const navigate = useNavigate();
    const tipo = useAuthStore(state => state.tipo);

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <div className="text-white hover:text-yellow-300 transition-colors">
                    Vagas
                </div>
            </DropdownTrigger>

            <DropdownMenu
                aria-label="Ações do usuário"
                className="bg-white/95 backdrop-blur-md border border-[#463baf]/20 shadow-lg rounded-xl"
                itemClasses={{
                    base: [
                        "rounded-md",
                        "text-sm",
                        "font-medium",
                        "data-[hover=true]:bg-[#463baf]/10",
                        "data-[selectable=true]:focus:bg-[#463baf]/20",
                        "data-[pressed=true]:bg-[#463baf]/20",
                        "text-gray-700",
                        "data-[color=danger]:text-red-600",
                    ],
                }}
            >
                {/* Menu da EMPRESA */}
                {tipo === "Empresa" ? (
                    <>
                        <DropdownItem key="cadastrar-vagas" onClick={() => navigate("vagascadastro")}>
                            Cadastrar Vagas
                        </DropdownItem>
                        <DropdownItem key="ver-vagas-empresa" onClick={() => navigate("vervagas")}>
                            Ver Vagas
                        </DropdownItem>
                    </>
                ) : (
                    <DropdownItem key="ver-vagas" onClick={() => navigate("vervagas")}>
                        Ver Vagas
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownMenuCustom;
