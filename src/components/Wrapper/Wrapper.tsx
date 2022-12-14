import { FC } from 'react';
import { useAppSelector } from '../../hooks/typeHooks';
import { Container, Header, WrapperEl } from './styled';
import { WrapperProps } from './types';

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <WrapperEl>
      <Header>Todos ({todos.length})</Header>
      <Container>{children}</Container>
    </WrapperEl>
  );
};

export default Wrapper;
