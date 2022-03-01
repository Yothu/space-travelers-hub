import styled from 'styled-components';
import PropTypes from 'prop-types';

const RocketContainer = styled.div`
  display: flex;
  padding: 0.7rem 0;
`;

const DataContainer = styled.div`
  padding: 0 1rem;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  font-family: sans-serif;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-family: sans-serif;
`;

const ImageStyle = {
  width: '16rem',
  height: '14rem',
};

const ReservationBtn = styled.button`
  border: none;
  color: white;
  padding: 0.8rem;
  font-size: 1.1rem;
  border-radius: 5px;
  background-color: #4844FF;
`;

const Rocket = ({
  id, image, name, description,
}) => {
  const Image = () => <img src={image} style={ImageStyle} alt={name} />;

  return (
    <RocketContainer id={id}>
      <Image />
      <DataContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <ReservationBtn>Reserve Rocket</ReservationBtn>
      </DataContainer>
    </RocketContainer>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
