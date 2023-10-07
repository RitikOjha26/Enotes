import {createSlice} from '@reduxjs/toolkit';
import userData from "../app/userData";
export const userSlice = createSlice({
    name:"user",
    initialState:userData,
    reducers: {
        login:(state,action)=>{
            
            state.email=action.payload.email;
            state.password=action.payload.password;
           
        },
        logout: (state,action)=>{
            state.user=null
            
        },
    },
});
export const {login,logout,Register} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;

