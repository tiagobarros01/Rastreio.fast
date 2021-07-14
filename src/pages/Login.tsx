import React, {
  FormEvent, useRef,
} from 'react';

import GlobalStyle from '../styles/global';
import {
  Container,
  FormContainer,
  Header,
  LoginForm,
  Details,
} from '../styles/pages/Login';

export default function Login(): JSX.Element {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    console.log({
      email,
      password,
    });
  }

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
          <LoginForm id="login" onSubmit={onSubmit} method="GET">
            <fieldset form="login" name="login-fields">
              <label htmlFor="emailOrUserName">
                E-mail or user
                <br />
                <input
                  type="text"
                  id="emailOrUserName"
                  name="emailOrUserName"
                  ref={emailInputRef}
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
                  name="password"
                  ref={passwordInputRef}
                  maxLength={22}
                  required
                />
              </label>
            </fieldset>
            <Details>
              <span>Miss your password?</span>
              <button type="submit">Enter</button>
            </Details>
          </LoginForm>
        </FormContainer>
      </Container>
      <GlobalStyle />
    </>
  );
}
