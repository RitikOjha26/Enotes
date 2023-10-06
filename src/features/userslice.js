import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:"user",
    initialState:{
        email:null,
        password:null,
    },
    reducers: {
        login:(state,action)=>{
            state.email=action.payload.email;
            state.password=action.payload.password;
        },
        logout: (state)=>{
            state.email= null;
            state.password=null;
        },
    },
});
export const {login,logout}= userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;

