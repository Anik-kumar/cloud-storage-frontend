import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
  todos: [{id: nanoid(), text: "buy pen"}]
};


export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newtodo = {
        id: nanoid(),
        text: action.payload
      };

      state.todos.push(newtodo);
    },
    removeTodo: (state, action) => {
      
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todos = state.todos;

      todos.forEach(todo => {
        if(todo.id === action.payload.id) {
          todo.text = action.payload.text
        }
      });

      state.todos = todos;
    }
  }
});


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;