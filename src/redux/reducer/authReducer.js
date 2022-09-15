import { createReducer } from "@reduxjs/toolkit";
import { registerUser, login, logOut } from "../actions/authAction";

const initialState = { token: null, isConnected: false, msgError: "" };

const authReducer = createReducer(initialState, (builder) => {
    builder
            .addCase(login.fulfilled, (state, action) => {
            state.isConnected = true;
            state.msgError = "";
            state.token = action.payload;
        })
            .addCase(login.rejected, (state, action) => {
            state.isConnected = false;
            state.msgError = "Votre mot de passe ou email est invalide";
            state.token = null;
        })
            .addCase(registerUser.fulfilled, (state, action) => {
            state.isConnected = true;
            state.msgError = "";
            state.token = action.payload;
        })
            .addCase(registerUser.rejected, (state, action) => {
            state.isConnected = false;
            state.msgError = "Données invalides";
            state.token = null;
        })
            .addCase(logOut, (state, action) => {
            state.isConnected = false;
            state.msgError = "";
            state.token = null;
        });
});

export default authReducer;
