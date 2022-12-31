import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    readTask: (state, action) => {
      
      state.push(action.payload);
    },
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      
      
    },
    deleteTask: (state, action) => {
     
     
        return state.filter(index => index !== action.payload);
      
    }
  }
});

export const { readTask, addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;