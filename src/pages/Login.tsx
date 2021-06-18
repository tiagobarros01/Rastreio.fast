/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';

import GlobalStyle from '../styles/global';
import {
  Container,
  FormContainer,
  Header,
  LoginForm,
  Details,
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
              <span>register now</span>
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
            <Details>
              <span>Miss your password?</span>
              <button form="login" type="submit">
                Enter
              </button>
            </Details>
          </LoginForm>
        </FormContainer>
      </Container>
      <GlobalStyle />
    </>
  );
}
