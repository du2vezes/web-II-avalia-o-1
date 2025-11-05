
import { create } from "zustand";


interface AuthState {
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    login: (accessToken: string, refreshToken?: string) => void;
    logout: () => void;
    }

    export const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem("access_token"),
    refreshToken: localStorage.getItem("refresh_token"),
    get isAuthenticated() {
        return !!this.token;
    },
    login: (accessToken, refreshToken) => {
        localStorage.setItem("access_token", accessToken);
        if (refreshToken) localStorage.setItem("refresh_token", refreshToken);
        set({ token: accessToken, refreshToken });
    },
    logout: () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        set({ token: null, refreshToken: null });
    
    },
}));
