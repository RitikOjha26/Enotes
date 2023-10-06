import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userslice"
import useRegisterReducer  from "../features/registerslice";

const preloadedState = {
    newuser:{
        name:null,
        email:null,
        password:null,
    },
    user: {
        email: null,
        password: null,
    },
};
const store = configureStore({
    reducer:{
        newuser : useRegisterReducer,
        user: userReducer,
        
    },
    preloadedState,
});

export default store;
