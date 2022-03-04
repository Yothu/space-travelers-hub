import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getRocketsFromAPI, listRockets } from '../../redux/rockets/rockets';
import { getMissionsFromAPI, listMissions } from '../../redux/missions/missions';
import Rocket from '../Rocket/Rocket';

const RocketsContainer = styled.div`
  padding: 0.3rem 2rem;
`;

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  const missions = useSelector((state) => state.missionsReducer);

  useEffect(async () => {
    if (rockets.length === 0) {
      const APIrockets = await getRocketsFromAPI();
      dispatch(listRockets(APIrockets));
    }
    if (missions.length === 0) {
      const APImissions = await getMissionsFromAPI();
      dispatch(listMissions(APImissions));
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
