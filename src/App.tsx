import { Wrapper, Todos } from './components';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Todos />
      </Wrapper>
    </>
  );
}

export default App;
