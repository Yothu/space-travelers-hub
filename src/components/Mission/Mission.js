import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../Font.css';

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

const descriptionStyle = {
  fontSize: '12px',
};

const nameStyle = {
  fontWeight: 'bold',
};

const Mission = ({ id, name, description }) => (
  <tr key={id}>
    <TableData style={nameStyle} className="font-1">{name}</TableData>
    <TableData style={descriptionStyle} className="font-1">{description}</TableData>
    <TableDataStatus>
      <NotActive className="font-1">NOT A MEMBER</NotActive>
      <Active className="font-1">Active Member</Active>
    </TableDataStatus>
    <TableDataStatus>
      <JoinBtn className="font-1">Join Mission</JoinBtn>
      <LeaveBtn className="font-1">Leave Mission</LeaveBtn>
    </TableDataStatus>
  </tr>
);

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
