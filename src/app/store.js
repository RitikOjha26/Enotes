import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userslice"
import useRegisterReducer  from "../features/registerslice";
import useNotesReducer from "../features/notes.slice"
import notesData from "../app/notesData";
import userData from "../app/userData"
const preloadedState = {
    newuser:userData,
    user: userData,
    notes:notesData,
};
const store = configureStore({
    reducer:{
        newuser : useRegisterReducer,
        user: userReducer,
        notes:useNotesReducer,
    },
    preloadedState,
});

export default store;
