import { createSlice } from "@reduxjs/toolkit";


export const notesSlice = createSlice({
    name : "notes",
    initialState:
    {
        title:null,
        description:null,
    },
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

export const userNotes = (state) => state.notes;

export default notesSlice.reducer;

