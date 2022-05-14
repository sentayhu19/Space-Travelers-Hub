import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Missions from '../missions';

const Mission = [
  {
    missionName: 'mission1',
    key: '1',
    id: '1',
    description: 'Falcon 1',
    IsJoined: false,
  },
];

describe('Test the mission Component', () => {
  it('mission section renders', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions key={Mission[0].id} mission={Mission[0]} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
