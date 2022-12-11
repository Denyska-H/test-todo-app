import { FC } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

import { useAppDispatch } from '../../hooks/typeHooks';
import { removeTodo, toggleTodo, editTodo, setValue, toggleSubmit } from '../../redux/todoSlice';

import { ButtonDelete, ButtonEdit, Buttons, Checkbox, CheckText, Text, TodoPanel } from './styled';
import { ITodoItemProps } from './types';

const TodoItem: FC<ITodoItemProps> = ({ id, value, completed }) => {
  const dispatch = useAppDispatch();

  const toggleTask = () => dispatch(toggleTodo(id));
  const editTask = () => {
    dispatch(setValue(value));
    dispatch(editTodo(id));
    dispatch(toggleSubmit(false));
  };
  const removeTask = () => dispatch(removeTodo(id));

  return (
    <TodoPanel>
      <CheckText>
        <Checkbox type="checkbox" checked={completed} onChange={toggleTask} />
        <Text>{value}</Text>
      </CheckText>
      <Buttons>
        <ButtonEdit onClick={editTask}>
          <FaEdit color="white" />
        </ButtonEdit>
        <ButtonDelete onClick={removeTask}>
          <FaRegTrashAlt color="white" />
        </ButtonDelete>
      </Buttons>
    </TodoPanel>
  );
};

export default TodoItem;
