import { FC } from 'react';
import { TodoItem } from '../TodoItem';
import { ITodoListProps } from './types';

const TodoList: FC<ITodoListProps> = ({ items, removeTodo, toggleTodo, editTodo }) => {
  return (
    <>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          {...todo}
        />
      ))}
    </>
  );
};

export default TodoList;
