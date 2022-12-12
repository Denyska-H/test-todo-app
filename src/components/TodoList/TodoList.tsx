import { FC, useEffect, useRef } from 'react';

import { TodoItem } from '../TodoItem';
import { useAppSelector } from '../../hooks/typeHooks';

const TodoList: FC = () => {
  const isMountedTodo = useRef(false);
  const todos = useAppSelector((state) => state.todos.list);

  useEffect(() => {
    if (isMountedTodo.current) {
      const dataTodo = JSON.stringify(todos);
      localStorage.setItem('todos', dataTodo);
    }
    isMountedTodo.current = true;
  }, [todos]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
