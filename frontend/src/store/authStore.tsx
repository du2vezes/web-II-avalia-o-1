
import { create } from "zustand";


interface AuthState {
    token: string | null;
    refreshToken: string | null;
    tipo: string | null;
    isAuthenticated: boolean;
    login: (accessToken: string, refreshToken: string, tipo: string) => void;
    logout: () => void;
    }

    export const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem("access_token"),
    refreshToken: localStorage.getItem("refresh_token"),
    tipo: localStorage.getItem("tipo"),
    get isAuthenticated() {
        return !!this.token;
    },
    login: (accessToken, refreshToken, tipo) => {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("tipo", tipo);
        set({ token: accessToken, refreshToken, tipo });
    },
    logout: () => {
        localStorage.clear();
        set({ token: null, refreshToken: null, tipo: null });
  },
}));
