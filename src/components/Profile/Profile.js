import styled from 'styled-components';
import { useSelector } from 'react-redux';
import '../Font.css';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.5rem;
`;

const RocketsSection = styled.div`
  margin: 1rem 0;
  flex-basis: calc(50% - 1rem);
  padding-right: 1rem;
`;

const MissionsSection = styled.div`
  margin: 1rem 0;
  flex-basis: 49%;
`;

const ProfileTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const ReservedRockets = styled.div`
  margin: 1rem 0;
  border-radius: 5px;
  border: 1px solid black;
`;

const JoinedMissions = styled.div`
  margin: 1rem 0;
  border-radius: 5px;
  border: 1px solid black;
`;

const RocketName = styled.p`
  margin: 0;
  padding: 1rem 0 2rem 1.5rem;
  font-size: 1.2rem;
  font-family: sans-serif;
  border-bottom: 1px solid black;
`;

const MissionName = styled.p`
  margin: 0;
  padding: 1rem 0 2rem 1.5rem;
  font-size: 1.2rem;
  font-family: sans-serif;
  border-bottom: 1px solid black;
`;

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const missions = useSelector((state) => state.missionsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <Container>
      <RocketsSection>
        <ProfileTitle className="font-1">My Rockets</ProfileTitle>
        <ReservedRockets>
          {
            reservedRockets.map((rRock) => <RocketName key={rRock.id} className="font-1">{rRock.name}</RocketName>)
          }
        </ReservedRockets>
      </RocketsSection>
      <MissionsSection>
        <ProfileTitle className="font-1">My Missions</ProfileTitle>
        <JoinedMissions>
          {
            joinedMissions.map((jMiss) => <MissionName key={jMiss.id} className="font-1">{jMiss.name}</MissionName>)
          }
        </JoinedMissions>
      </MissionsSection>
    </Container>
  );
};

export default Profile;
