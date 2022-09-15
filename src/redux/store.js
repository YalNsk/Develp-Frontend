import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";

const store = configureStore({
    // ↓ reducer obligatoire devTools pour savoir si on veut utiliser les objets de production, comme ça les gens ne peuvent pas aller voir nos states quand ils sont sur notre site 
    reducer: { auth: authReducer },
    devTools: process.env.NODE_ENV !== "production"
});

export default store;