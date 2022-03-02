import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getRocketsFromAPI, listRockets } from '../../redux/rockets/rockets';
import Rocket from '../Rocket/Rocket';

const RocketsContainer = styled.div`
  padding: 1rem;
`;

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(async () => {
    if (rockets.length === 0) {
      const APIrockets = await getRocketsFromAPI();
      dispatch(listRockets(APIrockets));
    }
  }, []);

  return (
    <RocketsContainer>
      {
        rockets.map((rocket) => (
          <Rocket
            id={rocket.id}
            key={rocket.id}
            name={rocket.name}
            image={rocket.image}
            reserved={rocket.reserved}
            description={rocket.description}
          />
        ))
      }
    </RocketsContainer>
  );
};

export default Rockets;
