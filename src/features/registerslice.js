import { createSlice } from "@reduxjs/toolkit";
import userData from "../app/userData";
export const regisSlice = createSlice({
    name : "newuser",
    initialState:userData,
    reducers:{
        signIn:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.password=action.payload.password;
            
        },
    },

});
export const {signIn} = regisSlice.actions;

export const registerUser = (state) => state.newuser;

export default regisSlice.reducer;

