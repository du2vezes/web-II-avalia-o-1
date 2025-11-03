import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Button } from "@heroui/button";
import {Avatar} from "@heroui/avatar";
import foto from "../assets/znt.jpg";

function DropdownMenuCustom() {
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Button isIconOnly className="rounded-full">
                    <Avatar src={foto} alt="User " className= "w-10 h-10 rounded-full "/>
                </Button>
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
                <DropdownItem key="perfil">Perfil</DropdownItem>
                <DropdownItem key="config">Configurações</DropdownItem>
                <DropdownItem key="suporte">Ajuda / Suporte</DropdownItem>
                <DropdownItem key="logout" color="danger" className="text-red-600 font-semibold">
                    Sair
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownMenuCustom;
