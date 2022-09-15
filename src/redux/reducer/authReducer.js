import { createReducer } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOut } from "../actions/authAction";

// à quoi ça ressemble à la base 
const initialState = { token: null, isConnected: false, userId:null, msgError: "" };


// cette constante utilise la méthode createReducer (importée donc existante) qui utilise en premier paramètre le state initiale et en deuxième paramètre un callback,
// une fonction anonyme avec comme paramètre builder 
const authReducer = createReducer(initialState, (builder) => {
    builder
    // une action asynchrone aura toujours 3 statuts
            .addCase(loginUser.fulfilled, (state, action) => {
            state.isConnected = true;
            state.msgError = "";
            state.token = action.payload;
        })
            .addCase(loginUser.rejected, (state, action) => {
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
