import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
}

// tenta recuperar o token salvo
const tokenFromStorage = localStorage.getItem("token");

const initialState: AuthState = {
    isAuthenticated: !!tokenFromStorage,
    token: tokenFromStorage,
    };

    const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
        console.log("✅ Login salvo no Redux:", action.payload);
        },
        logout: (state) => {
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem("token");
        console.log("🚪 Logout executado");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
