import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rockets';
import '../Font.css';

const RocketContainer = styled.div`
  display: flex;
  padding: 0.7rem 0;
`;

const DataContainer = styled.div`
  padding: 0 1rem;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif !important;
`;

const Description = styled.p`
  font-size: 0.7rem;
`;

const ImageStyle = {
  width: '12rem',
  height: '9rem',
};

const ReserveBtn = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.7rem;
  border-radius: 3px;
  background-color: #4844FF;
`;

const CancelBtn = styled.button`
  border: 1px solid gray;
  color: gray;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.7rem;
  border-radius: 3px;
  background-color: white;
`;

const ReservedTag = styled.span`
  color: white;
  padding: 0.1rem 0.2rem;
  font-size: 0.5rem;
  font-weight: bold;
  border-radius: 3px;
  margin-right: 0.4rem;
  background-color: #00a2b9;
`;

const Rocket = ({
  id, image, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const Image = () => <img src={image} style={ImageStyle} alt={name} />;

  const resRocket = () => {
    dispatch(reserveRocket(id));
  };

  const cancelReservation = () => {
    dispatch(cancelRocket(id));
  };

  return (
    <RocketContainer id={id}>
      <Image />
      <DataContainer>
        <Name className="font-1">{name}</Name>
        <Description className="font-1">
          {reserved === true && (
            <ReservedTag>Reserved</ReservedTag>
          )}
          {description}
        </Description>
        {reserved === true && (
          <CancelBtn className="font-1" onClick={cancelReservation}>Cancel Reservation</CancelBtn>
        )}
        {reserved === false && (
          <ReserveBtn className="font-1" onClick={resRocket}>Reserve Rocket</ReserveBtn>
        )}
      </DataContainer>
    </RocketContainer>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
