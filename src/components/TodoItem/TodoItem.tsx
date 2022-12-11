import { FC } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

import { ButtonDelete, ButtonEdit, Buttons, Checkbox, CheckText, Text, TodoPanel } from './styled';
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
    <TodoPanel>
      <CheckText>
        <Checkbox type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
        <Text>{value}</Text>
      </CheckText>

      <Buttons>
        <ButtonEdit onClick={() => editTodo(id)}>
          <FaEdit color="white" />
        </ButtonEdit>
        <ButtonDelete onClick={() => removeTodo(id)}>
          <FaRegTrashAlt color="white" />
        </ButtonDelete>
      </Buttons>
    </TodoPanel>
  );
};

export default TodoItem;
