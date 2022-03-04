import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rocket from '../Rocket/Rocket';
import store from '../../redux/configureStore';

describe('Rocket component', () => {
  it('it renders', () => {
    const mock = {
      id: 2,
      image: 'image',
      name: 'Falcon 9',
      reserved: false,
      description: 'very rocket',
    };

    const rocket = renderer
      .create(
        <Provider store={store}>
          <Rocket
            id={mock.id}
            key={mock.id}
            name={mock.name}
            image={mock.image}
            reserved={mock.reserved}
            description={mock.description}
          />
        </Provider>,
      )
      .toJSON();
    expect(rocket).toMatchSnapshot();
  });
});
