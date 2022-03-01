import styled from 'styled-components';
import Header from './components/Header';

const WholePage = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <WholePage>
      <Header />
    </WholePage>
  );
}

export default App;
