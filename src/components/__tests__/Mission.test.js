import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Mission from '../Mission/Mission';
import store from '../../redux/configureStore';

describe('Mission component', () => {
  it('it renders', () => {
    const mock = {
      id: 'abc',
      name: 'Start',
      reserved: false,
      description: 'this is the description',
    };

    const mission = renderer
      .create(
        <Provider store={store}>
          <Mission
            id={mock.id}
            key={mock.id}
            name={mock.name}
            reserved={mock.reserved}
            description={mock.description}
          />
        </Provider>,
      )
      .toJSON();
    expect(mission).toMatchSnapshot();
  });
});
