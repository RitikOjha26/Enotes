import { createSlice } from "@reduxjs/toolkit";

export const regisSlice = createSlice({
    name : "newuser",
    initialState:{
        name:null,
        email:null,
        password:null,
        loggedIn:false,
    },
    reducers:{
        signIn:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.loggedIn=true;
        },
    },

});
export const {signIn} = regisSlice.actions;

export const registerUser = (state) => state.newuser;

export default regisSlice.reducer;

