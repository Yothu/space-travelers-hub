import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMissionsFromAPI, listMissions } from '../../redux/missions/missions';
import './Missions.css';
import '../Font.css';

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

const TableData = styled.td`
  padding: 8px;
  text-align: left;
  vertical-align: text-top;
  border: 1px solid #dddddd;
`;

const TableDataStatus = styled.td`
  padding: 8px;
  text-align: left;
  vertical-align: middle;
  border: 1px solid #dddddd;
`;

const JoinBtn = styled.button`
  color: black;
  padding: 0.3rem;
  margin: 0 0.6rem;
  border-radius: 3px;
  white-space: nowrap;
  border: 1px solid black;
  background-color: transparent;
`;

const LeaveBtn = styled.button`
  color: red;
  padding: 0.3rem;
  margin: 0 0.6rem;
  border-radius: 3px;
  white-space: nowrap;
  border: 1px solid red;
  background-color: transparent;
`;

const Active = styled.p`
  color: white;
  padding: 0.2rem;
  font-weight: bold;
  font-size: 0.6rem;
  border-radius: 5px;
  white-space: nowrap;
  background-color: #00a2b9;
`;

const NotActive = styled.p`
  color: white;
  padding: 0.2rem;
  font-weight: bold;
  font-size: 0.6rem;
  border-radius: 5px;
  white-space: nowrap;
  background-color: #6c737d;
`;

const description = {
  fontSize: '12px',
};

const name = {
  fontWeight: 'bold',
};

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
            <tr key={mission.id}>
              <TableData style={name} className="font-1">{mission.name}</TableData>
              <TableData style={description} className="font-1">{mission.description}</TableData>
              <TableDataStatus>
                <NotActive className="font-1">NOT A MEMBER</NotActive>
                <Active className="font-1">Active Member</Active>
              </TableDataStatus>
              <TableDataStatus>
                <JoinBtn className="font-1">Join Mission</JoinBtn>
                <LeaveBtn className="font-1">Leave Mission</LeaveBtn>
              </TableDataStatus>
            </tr>
          ))
        }
      </Table>
    </MissionsContainer>
  );
};

export default Missions;
