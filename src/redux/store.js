import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";

const store = configureStore({
    reducer: { auth: authReducer },
    devTools: process.env.NODE_ENV !== "production"
});

export default store;