const LIST_MISSIONS = 'SPACE-TRAVELERS/MISSIONS/LIST_MISSIONS';
const JOIN_MISSION = 'SPACE-TRAVELERS/MISSIONS/JOIN_MISSION';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    default:
      return state;
  }
};

const listMissions = (payload) => ({
  type: LIST_MISSIONS,
  payload,
});

const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

const getMissionsFromAPI = async () => {
  const API_URL = 'https://api.spacexdata.com/v3/missions';
  const RESPONSE = await fetch(API_URL);
  if (await RESPONSE.ok) {
    const RAW_MISSIONS = await RESPONSE.json();
    const MISSIONS = [];
    for (let i = 0; i < RAW_MISSIONS.length; i += 1) {
      MISSIONS.push({
        reserved: false,
        id: RAW_MISSIONS[i].mission_id,
        name: RAW_MISSIONS[i].mission_name,
        description: RAW_MISSIONS[i].description,
      });
    }
    return MISSIONS;
  }
  return [];
};

export default reducer;
export { getMissionsFromAPI, listMissions, joinMission };
