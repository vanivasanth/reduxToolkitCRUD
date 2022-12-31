import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../components/TaskSlice';

 const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
})

export default store