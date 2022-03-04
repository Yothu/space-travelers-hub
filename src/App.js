import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/Profile/Profile';
import Missions from './components/Missions/Missions';

const WholePage = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <WholePage>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </WholePage>
  );
}

export default App;
