import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsFromAPI, listMissions } from '../../redux/missions/missions';

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
    <div>
      <div>
        <p>
          missions
        </p>
      </div>
    </div>
  );
};

export default Missions;
