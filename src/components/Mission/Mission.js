import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../Font.css';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

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
  cursor: pointer;
  padding: 0.3rem;
  margin: 0 0.6rem;
  border-radius: 3px;
  white-space: nowrap;
  border: 1px solid black;
  background-color: transparent;
`;

const LeaveBtn = styled.button`
  color: red;
  cursor: pointer;
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

const descriptionStyle = {
  fontSize: '12px',
};

const nameStyle = {
  fontWeight: 'bold',
};

const Mission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const jnMission = () => {
    dispatch(joinMission(id));
  };

  const lveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr key={id}>
      <TableData style={nameStyle} className="font-1">{name}</TableData>
      <TableData style={descriptionStyle} className="font-1">{description}</TableData>
      <TableDataStatus>
        {reserved === true && (
          <Active className="font-1">Active Member</Active>
        )}
        {reserved === false && (
          <NotActive className="font-1">NOT A MEMBER</NotActive>
        )}
      </TableDataStatus>
      <TableDataStatus>
        {reserved === true && (
          <LeaveBtn className="font-1" onClick={lveMission}>Leave Mission</LeaveBtn>
        )}
        {reserved === false && (
          <JoinBtn className="font-1" onClick={jnMission}>Join Mission</JoinBtn>
        )}
      </TableDataStatus>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
