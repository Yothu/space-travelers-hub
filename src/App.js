import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets/Rockets';

const WholePage = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <WholePage>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </WholePage>
  );
}

export default App;
