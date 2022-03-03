import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../Header/Header';

describe('Rockets page tests', () => {
  it('it renders correctly', () => {
    const header = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
