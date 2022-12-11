import { FC, useRef, useState, useEffect } from 'react';
import { TodoList } from '../TodoList';
import { Input, SubmitButton, TextField } from './styled';
import { ITodosProps } from './types';

const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodosProps[]>([]);
  const [value, setValue] = useState('');
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditableTodo, setIsEditableTodo] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleEnterDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const addTodo = () => {
    if (!value) {
      alert(`😚 Please enter your To-Do task 😚`);
    } else if (value && !toggleSubmit) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === isEditableTodo) return { ...todo, value };
          return todo;
        }),
      );
      setToggleSubmit(true);
      setValue('');
    } else {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          value,
          completed: false,
        },
      ]);
      setValue('');
    }
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };

  const editTodo = (id: string) => {
    const newEditableTodo = todos.find((todo) => todo.id === id);
    if (newEditableTodo) setValue(newEditableTodo.value);
    setIsEditableTodo(id);
    setToggleSubmit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <TextField>
        <Input
          placeholder="Enter todo here"
          value={value}
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleEnterDown}
        />
        <SubmitButton onClick={addTodo}>Submit</SubmitButton>
      </TextField>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
    </>
  );
};

export default Todos;
