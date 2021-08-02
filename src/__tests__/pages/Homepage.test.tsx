import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContextProvider from '../../contexts';
import Homepage from '../../pages/Homepage';

describe('Test Homepage successfully', () => {
  it('Should homepage exists', () => {
    const { container } = render(
      <BrowserRouter>
        <ContextProvider>
          <Homepage />
        </ContextProvider>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should button exists', () => {
    const btnText = /track order/i;

    render(
      <BrowserRouter>
        <ContextProvider>
          <Homepage />
        </ContextProvider>
      </BrowserRouter>,
    );

    screen.getByRole('button', { name: btnText });
  });

  it('Should button clicked', () => {
    const btnText = /track order/i;

    render(
      <BrowserRouter>
        <ContextProvider>
          <Homepage />
        </ContextProvider>
      </BrowserRouter>,
    );

    const button = screen.getByRole('button', { name: btnText });

    userEvent.click(button);
  });

  it('Should input exists', () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Homepage />
        </ContextProvider>
      </BrowserRouter>,
    );

    screen.getByPlaceholderText(/Code here/i);
  });
});
