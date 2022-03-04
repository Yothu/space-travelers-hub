import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../Missions/Missions';
import store from '../../redux/configureStore';

describe('Missions page tests', () => {
  it('it renders', () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(missions).toMatchSnapshot();
  });
});
