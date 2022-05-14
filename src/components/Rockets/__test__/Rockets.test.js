import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Rockets from '../Rockets';

const rockets = [
  {
    desc: 'Falcon 1 is',
    key: '1',
    id: '1',
    name: 'Falcon 1',
    img: 'https://dbkhs.net',
    reserv: false,
  },
];

describe('Test the Rockets Component', () => {
  it('rockets section renders', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets key={rockets[0].id} rocket={rockets[0]} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
