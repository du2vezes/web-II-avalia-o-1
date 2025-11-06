import axios from "axios";



export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",

});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});



// 🔹 Intercepta respostas de erro
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Se for erro 401 (token inválido ou expirado)
        if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // evita loop infinito
        try {
            const refreshToken = localStorage.getItem("refresh_token");
            if (refreshToken) {
            // tenta gerar novo access token
            const res = await axios.post("http://127.0.0.1:8000/api/v1/token/refresh/", {
                refresh: refreshToken,
            });

            localStorage.setItem("access_token", res.data.access);
            api.defaults.headers.Authorization = `Bearer ${res.data.access}`;
            originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
            return api(originalRequest); // refaz a requisição original
            }
        } catch (refreshError) {
            console.warn(refreshError);
        }
        }

        // Se o refresh falhou → desloga o usuário
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        window.location.href = "/login";

        return Promise.reject(error);
    }
);

