import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import goodsReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todolist: todoReducer
    
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
