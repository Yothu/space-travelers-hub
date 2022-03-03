import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../Rockets/Rockets';
import store from '../../redux/configureStore';

describe('Rockets page tests', () => {
  it('it renders', () => {
    const rockets = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });
});
