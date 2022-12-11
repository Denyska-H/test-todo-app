import { FC } from 'react';
import { Container, Header, WrapperEl } from './styled';

type WrapperProps = {
  children: JSX.Element;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <WrapperEl>
      <Header>Todos</Header>
      <Container>{children}</Container>
    </WrapperEl>
  );
};

export default Wrapper;
