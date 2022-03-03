import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pageLogo from '../../assets/images/planet.png';
import '../Font.css';

const Container = styled.header`
  padding: 0.5rem 1rem;
  border-bottom: 2px solid black;
`;

const PageInfo = styled.div`
  display: flex;
`;

const LogoStyle = {
  width: '4rem',
  height: '4rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
};

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif !important;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
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
          <Title className="font-1">{title}</Title>
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
            to="/missions"
            style={({ isActive }) => ({
              color: '#000FFF',
              padding: '0 0.5rem',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Missions
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
