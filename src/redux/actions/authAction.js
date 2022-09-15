import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login", async (data) => {
    const response = await axios.post(
        "http://localhost:8080/api/auth/login/",
        data
    );
    return response.data.token;
});

export const registerUser = createAsyncThunk("register", async (data) => {
    const response = await axios.post(
        "http://localhost:8080/api/auth/register/",
        data
    );
    return response.data.token;
});

export const logOut = createAction();
