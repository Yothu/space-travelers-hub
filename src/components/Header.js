import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pageLogo from '../assets/images/planet.png';

const Container = styled.header`
  padding: 1rem;
  border-bottom: 2px solid black;
`;

const PageInfo = styled.div`
  display: flex;
`;

const LogoStyle = {
  height: '4.8rem',
  width: '4.8rem',
};

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InnerContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const PageLogo = () => <img src={pageLogo} style={LogoStyle} alt="page-logo" />;
  const title = 'Space Travelers\' Hub';

  return (
    <Container>
      <InnerContainer>
        <PageInfo>
          <PageLogo />
          <h1>{title}</h1>
        </PageInfo>
        <LinksContainer>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: '#000FFF',
              padding: '0 0.5rem',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Rockets
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              color: '#000FFF',
              padding: '0 0 0 0.5rem',
              borderLeft: '1px solid #000',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            My Profile
          </NavLink>
        </LinksContainer>
      </InnerContainer>
    </Container>
  );
};

export default Header;
