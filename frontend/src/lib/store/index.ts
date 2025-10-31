import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

// Tipagem do state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
