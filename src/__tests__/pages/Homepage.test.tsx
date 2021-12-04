import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ContextProviders } from 'src/contexts';

import { Home } from '../../pages/Home';

describe('Test Home successfully', () => {
  it('Should Home exists', () => {
    const { container } = render(
      <BrowserRouter>
        <ContextProviders>
          <Home />
        </ContextProviders>
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should button exists', () => {
    const btnText = /track order/i;

    render(
      <BrowserRouter>
        <ContextProviders>
          <Home />
        </ContextProviders>
      </BrowserRouter>,
    );

    screen.getByRole('button', { name: btnText });
  });

  it('Should button clicked', () => {
    const btnText = /track order/i;

    render(
      <BrowserRouter>
        <ContextProviders>
          <Home />
        </ContextProviders>
      </BrowserRouter>,
    );

    const button = screen.getByRole('button', { name: btnText });

    userEvent.click(button);
  });

  it('Should input exists', () => {
    render(
      <BrowserRouter>
        <ContextProviders>
          <Home />
        </ContextProviders>
      </BrowserRouter>,
    );

    screen.getByPlaceholderText(/Code here/i);
  });
});
