import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:null,
        email:null,
        password:null,
        loggedIn:false,
        
    },
    reducers: {
        login:(state,action)=>{
            
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.loggedIn=true;
           
        },
        logout: (state,action)=>{
            state.user=null
            
        },
    },
});
export const {login,logout,Register} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;

