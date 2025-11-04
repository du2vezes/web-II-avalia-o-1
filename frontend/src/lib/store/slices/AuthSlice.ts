import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface authState {
    isAuthenticated: boolean;
    token: string | null;
}

// tenta recuperar o token salvo
const tokenFromStorage = localStorage.getItem("token");

const initialState: authState = {
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
        localStorage.setItem("access_token", action.payload);
        console.log("✅ Login salvo no Redux:", action.payload);
        },
        logout: (state) => {
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem("access_token");
        localStorage.removeItem("refreshToken");
        console.log("🚪 Logout executado");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
