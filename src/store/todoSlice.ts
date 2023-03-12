import { createSlice } from '@reduxjs/toolkit';
import { TodoTypes } from '../types/types'

export interface TodoState  {
  todoList: TodoTypes[];
  isTitleFilled: boolean;
  isDescriptionFilled: boolean;
}

export const initialState: TodoState = {
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
    },
    updateTodoStatus(state, action){
      const { id, status} = action.payload;
      const todo = state.todoList.find(todo => todo.id === id);
      if(todo) 
      todo.status = status;

    }
    
  }
});


export const {getTodoItem, updateTodoStatus} = todoSlice.actions;
export default todoSlice.reducer;
