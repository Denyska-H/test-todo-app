import { FC, useRef, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/typeHooks';
import { addEditedTodo, addTodo, setValue, toggleSubmit } from '../../redux/todoSlice';

import { TodoList } from '../TodoList';
import { Input, SubmitButton, TextField } from './styled';

const Todos: FC = () => {
  const dispatch = useAppDispatch();
  const payloadValue = useAppSelector((state) => state.todos.value);
  const payloadSubmit = useAppSelector((state) => state.todos.toggleSubmit);

  const addTask = () => {
    if (!payloadValue) alert(`😚 Please enter your To-Do task 😚`);
    else if (payloadValue && !payloadSubmit) {
      dispatch(addEditedTodo(payloadValue));
      dispatch(toggleSubmit(true));
      dispatch(setValue(''));
    } else {
      dispatch(addTodo(payloadValue));
      dispatch(setValue(''));
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setValue(e.target.value));
  };

  const handleEnterDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTask();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <TextField>
        <Input
          placeholder="Enter todo here"
          value={payloadValue}
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleEnterDown}
        />
        <SubmitButton onClick={addTask}>Submit</SubmitButton>
      </TextField>
      <TodoList />
    </>
  );
};

export default Todos;
