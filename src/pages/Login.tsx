/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import GlobalStyle from '../styles/global';
import {
  Container,
  FormContainer,
  Header,
  LoginForm,
} from '../styles/pages/Login';

export default function Login(): JSX.Element {
  return (
    <>
      <Container>
        <FormContainer>
          <Header>
            <h1>Login</h1>
            <p>
              Don&apos;t have any account yet?
              {' '}
              <a href="">register now</a>
            </p>
          </Header>
          <LoginForm id="login" action="" method="GET">
            <fieldset form="login" name="login-fields">
              <label htmlFor="emailOrUserName">
                E-mail or user
                <br />
                <input
                  type="text"
                  id="emailOrUserName"
                  autoComplete="email"
                  maxLength={28}
                  required
                  autoFocus
                />
              </label>
              <br />
              <label htmlFor="password" id="password">
                Password
                <br />
                <input
                  type="password"
                  id="password"
                  autoComplete="password"
                  required
                  maxLength={22}
                />
              </label>
            </fieldset>
            <div>
              <a href="#">Miss your password?</a>
              <button form="login" type="submit">
                Enter
              </button>
            </div>
          </LoginForm>
        </FormContainer>
      </Container>
      <GlobalStyle />
    </>
  );
}
