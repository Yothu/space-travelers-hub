const LIST_ROCKETS = 'SPACE-TRAVELERS/ROCKETS/LIST_ROCKETS';
const RESERVE_ROCKET = 'SPACE-TRAVELERS/ROCKETS/RESERVE_ROCKET';
const CANCEL_ROCKET = 'SPACE-TRAVELERS/ROCKETS/CANCEL_ROCKET';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

const listRockets = (payload) => ({
  type: LIST_ROCKETS,
  payload,
});

const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  id,
});

const getRocketsFromAPI = async () => {
  const API_URL = 'https://api.spacexdata.com/v3/rockets';
  const RESPONSE = await fetch(API_URL);
  if (await RESPONSE.ok) {
    const RAW_ROCKETS = await RESPONSE.json();
    const ROCKETS = [];
    for (let i = 0; i < RAW_ROCKETS.length; i += 1) {
      ROCKETS.push({
        reserved: false,
        id: RAW_ROCKETS[i].id,
        name: RAW_ROCKETS[i].rocket_name,
        image: RAW_ROCKETS[i].flickr_images[0],
        description: RAW_ROCKETS[i].description,
      });
    }
    return ROCKETS;
  }
  return [];
};

export default reducer;
export {
  getRocketsFromAPI, listRockets, reserveRocket, cancelRocket,
};
