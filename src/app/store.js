import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userslice"

const preloadedState = {
    user: {
        email: null,
        password: null,
    },
};
const store = configureStore({
    reducer:{
        user: userReducer,
    },
    preloadedState,
});

export default store;
