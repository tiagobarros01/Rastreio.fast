/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import {
  LoginContainer,
  FormContainer,
  HeaderForm,
  LoginForm,
} from '../styles/pages/Login';
import dark from '../styles/themes/dark';

export default function Login() {
  return (
    <ThemeProvider theme={dark}>
      <LoginContainer>
        <FormContainer>
          <HeaderForm>
            <h1>Login</h1>
            <p>
              Don&apos;t have any account yet?
              {' '}
              <a href="">register now</a>
            </p>
          </HeaderForm>
          <LoginForm id="login" action="" method="GET">
            <fieldset form="login" name="login-fields">
              <label htmlFor="emailOrUserName">
                E-mail or user
                <br />
                <input type="text" id="emailOrUserName" autoComplete="email" required maxLength={28} />
              </label>
              <br />
              <label htmlFor="password" id="password">
                Password
                <br />
                <input type="password" id="password" autoComplete="password" required maxLength={22} />
              </label>
            </fieldset>
            <div>
              <a href="">Miss your password?</a>
              <button form="login" type="submit">Enter</button>
            </div>
          </LoginForm>
        </FormContainer>
      </LoginContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
