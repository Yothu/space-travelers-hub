import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <MissionsContainer>
      <Table>
        <tbody>
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
                reserved={mission.reserved}
                description={mission.description}
              />
            ))
          }
        </tbody>
      </Table>
    </MissionsContainer>
  );
};

export default Missions;
