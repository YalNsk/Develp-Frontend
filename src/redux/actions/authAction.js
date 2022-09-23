import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
// ↑ createAction pour les actions simples createAsyncThunk pour les actions asynchrones, dès qu'on veut faire un appel vers une base de données 
import axios from "axios";

export const loginUser = createAsyncThunk("login", async (data) => {
    const response = await axios.post(
        "http://localhost:8080/api/auth/login/",
        data
    );
    return response.data;
});

export const registerUser = createAsyncThunk("register", async (data) => {
    const response = await axios.post(
        "http://localhost:8080/api/auth/register/",
        data
    );
    return response.data;
});

export const logOut = createAction("user/logOut");
