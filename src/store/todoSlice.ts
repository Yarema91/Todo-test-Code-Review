import { createSlice } from '@reduxjs/toolkit';
import { TodoTypes } from '../types/types'

interface TodoState  {
  todoList: TodoTypes[];
  isTitleFilled: boolean;
  isDescriptionFilled: boolean;
}

const initialState: TodoState = {
  todoList: [],
  isTitleFilled: true,
  isDescriptionFilled: true
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    getTodoItem(state, action) {
      state.isTitleFilled = !!action.payload.titleValue 
      state.isDescriptionFilled = !!action.payload.descriptionValue 
 
      if(action.payload.titleValue && action.payload.descriptionValue){ 
        state.todoList.push(action.payload); 
      }  
    }
  }
});


export const {getTodoItem} = todoSlice.actions;
export default todoSlice.reducer;
