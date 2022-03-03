import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pageLogo from '../../assets/images/planet.png';
import '../Font.css';

const Container = styled.header`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid lightgray;
`;

const PageInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoStyle = {
  width: '3rem',
  height: '3rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
};

const Title = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 1.5rem;
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
              fontSize: '0.8rem',
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
              fontSize: '0.8rem',
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
              fontSize: '0.8rem',
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
