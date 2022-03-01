import styled from 'styled-components';
import pageLogo from '../assets/images/planet.png';

const Container = styled.header`
  display: flex;
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

const Header = () => {
  const PageLogo = () => <img src={pageLogo} style={LogoStyle} alt="page-logo" />;
  const title = 'Space Travelers\' Hub';

  return (
    <Container>
      <nav>
        <PageInfo>
          <PageLogo />
          <h1>{title}</h1>
        </PageInfo>
        <div />
      </nav>
    </Container>
  );
};

export default Header;
