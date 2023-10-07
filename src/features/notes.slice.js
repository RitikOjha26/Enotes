import { createSlice } from "@reduxjs/toolkit";
import notesdata from "../app/notesData"

const notesSlice = createSlice({
    name : "notes",
    initialState: notesdata,
    reducers:{
        addNote:(state,action) =>{
            state.title=action.payload.title;
            state.description=action.payload.description;
        },
        deleteNote:(state,action)=>{
            state.notes=null;
        }
    },

});

export const {addNote,deleteNote} = notesSlice.actions;



export default notesSlice.reducer;

