const LIST_ROCKETS = 'space-travelers/rockets/LIST_ROCKETS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

const listRockets = (payload) => ({
  type: LIST_ROCKETS,
  payload,
});

const getRocketsFromAPI = async () => {
  const API_URL = 'https://api.spacexdata.com/v3/rockets';
  const RESPONSE = await fetch(API_URL);
  if (await RESPONSE.ok) {
    const RAW_ROCKETS = await RESPONSE.json();
    const ROCKETS = [];
    for (let i = 0; i < RAW_ROCKETS.length; i += 1) {
      ROCKETS.push({
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
export { getRocketsFromAPI, listRockets };
