import React, { FormEvent, useRef } from 'react';

import { useStore } from '../hooks/useStore';
import { useRoutes } from '../services/useRoutes';
import {
  Wrapper,
  Container,
  Header,
  SignInForm,
  DividesFields,
  NameContainer,
  BtnContainer,
  PasswordContainer,
} from '../styles/pages/Login';

export default function Login(): JSX.Element {
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const { setUser } = useStore();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setUser({
      userName: String(userNameRef.current?.value),
      name: String(nameRef.current?.value),
      lastName: String(lastNameRef.current?.value),
      email: String(emailRef.current?.value),
      password: String(passwordRef.current?.value),
      confirmPassword: String(confirmPasswordRef.current?.value),
    });

    useRoutes('/');
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <h1>Login</h1>
        </Header>
        <SignInForm id="signIn" onSubmit={onSubmit} method="GET">
          <fieldset form="signIn" name="signIn-fields">
            <label htmlFor="userName">
              User name
              <br />
              <input
                type="text"
                id="userName"
                name="userName"
                maxLength={12}
                ref={userNameRef}
                required
              />
            </label>
            <br />
            <label htmlFor="email">
              E-mail
              <br />
              <input
                type="email"
                id="email"
                name="email"
                maxLength={28}
                ref={emailRef}
                required
              />
            </label>
            <br />
            <DividesFields>
              <NameContainer>
                <label htmlFor="name">
                  Name
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    maxLength={12}
                    ref={nameRef}
                    required
                  />
                </label>
                <br />
                <label htmlFor="lastName">
                  Last name
                  <br />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    maxLength={12}
                    ref={lastNameRef}
                    required
                  />
                </label>
              </NameContainer>
              <PasswordContainer>
                <label htmlFor="password">
                  Password
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    maxLength={22}
                    ref={passwordRef}
                    required
                  />
                </label>
                <br />
                <label htmlFor="confirmPassword">
                  Confirm password
                  <br />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    maxLength={22}
                    ref={confirmPasswordRef}
                    required
                  />
                </label>
              </PasswordContainer>
            </DividesFields>
          </fieldset>
          <BtnContainer>
            <button type="submit">Enter</button>
          </BtnContainer>
        </SignInForm>
      </Container>
    </Wrapper>
  );
}
