import { FC } from 'react';
import { ITodoItemProps } from './types';

const TodoItem: FC<ITodoItemProps> = ({
  id,
  value,
  completed,
  toggleTodo,
  removeTodo,
  editTodo,
}) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
      {value}
      <button onClick={() => editTodo(id)}>edit</button>
      <button onClick={() => removeTodo(id)}>x</button>
    </div>
  );
};

export default TodoItem;
