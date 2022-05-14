import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import  myprofile from '../myProfile';

describe('Test the Rockets Component', () => {
    it('rockets section renders', () => {
      const { container } = render(
        <Provider store={store}>
          <myprofile />
        </Provider>,
      );
  
      expect(container).toMatchSnapshot();
    });
  });