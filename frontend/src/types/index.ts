// Tipos relacionados a usuários
export interface User {
    id: number;
    username: string;
    email: string;
    is_superuser: boolean;
    groups: string[];
}

// Tipos relacionados a empresas
export interface Empresa {
    id?: number;
    nome: string;
    email: string;
    username?: string;
    password?: string;
    area_atuacao: string;
    descricao: string;
    user?: number;
}

// Tipos relacionados a vagas
export interface Vaga {
    id: number;
    titulo: string;
    descricao: string;
    requisitos: string;
    salario: number;
    empresa: string;
    empresa_nome?: string;
}

// Tipos relacionados a candidatos
export interface Candidato {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    curriculo: string;
    user: number;
}

// Tipos para respostas da API
export interface APIResponse<T> {
    data: T;
    status: number;
    message?: string;
}

// Tipos para formulários
export interface LoginForm {
    username: string;
    password: string;
}

export interface EmpresaForm {
    nome: string;
    cnpj: string;
    descricao: string;
}

export interface VagaForm {
    titulo: string;
    descricao: string;
    requisitos: string;
    salario: number;
}