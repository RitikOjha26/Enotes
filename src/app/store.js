import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userslice"
import useRegisterReducer  from "../features/registerslice";
import useNotesReducer from "../features/notes.slice"

const preloadedState = {
    newuser:{
        name:null,
        email:null,
        password:null,
    },
    user: {
        email: null,
        password: null,
        loggedIn:false,
    },
    notes:{
        title:null,
        description:null,
    }
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
