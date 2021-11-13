import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ContextProvider } from '../../contexts';
import { Home } from '../../pages/Home';

describe('Test Home successfully', () => {
  it('Should Home exists', () => {
    const { container } = render(
      <BrowserRouter>
        <ContextProvider>
          <Home />
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
          <Home />
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
          <Home />
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
          <Home />
        </ContextProvider>
      </BrowserRouter>,
    );

    screen.getByPlaceholderText(/Code here/i);
  });
});
