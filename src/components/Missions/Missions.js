import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMissionsFromAPI, listMissions } from '../../redux/missions/missions';
import './Missions.css';
import '../Font.css';
import Mission from '../Mission/Mission';

const MissionsContainer = styled.div`
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #dddddd;
`;

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);

  useEffect(async () => {
    if (missions.length === 0) {
      const APImissions = await getMissionsFromAPI();
      dispatch(listMissions(APImissions));
    }
  }, []);

  return (
    <MissionsContainer>
      <Table>
        <tr>
          <TableHeader className="font-1">Mission</TableHeader>
          <TableHeader className="font-1">Description</TableHeader>
          <TableHeader className="font-1">Status</TableHeader>
          <TableHeader className="font-1"> </TableHeader>
        </tr>
        {
          missions.map((mission) => (
            <Mission
              id={mission.id}
              key={mission.id}
              name={mission.name}
              description={mission.description}
            />
          ))
        }
      </Table>
    </MissionsContainer>
  );
};

export default Missions;
