import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from './types';

const initialState: TodosState = {
  list: [],
	value: '',
	id: '',
	toggleSubmit: true,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
		setValue(state, action: PayloadAction<string>) {
			state.value = action.payload;
		},
    addTodo(state, action: PayloadAction<string>) {
			state.list.push({
				id: new Date().toISOString(),
				value: action.payload,
				completed: false,
			});
    },
		addEditedTodo(state, action: PayloadAction<string>) {
			state.list.map((todo) => todo.id === state.id ? todo.value = action.payload : todo);
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed;
    },
		toggleSubmit(state, action: PayloadAction<boolean>) {
			state.toggleSubmit = action.payload;
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
		editTodo(state, action: PayloadAction<string>) {
			state.id = action.payload;
		},
  }
});

export const { addTodo, toggleTodo, removeTodo, editTodo, setValue, toggleSubmit, addEditedTodo} = todoSlice.actions;

export default todoSlice.reducer;



