/* eslint-disable no-restricted-globals */
import React, { FormEvent, useRef, useState } from 'react';

import { useStore } from '../hooks/useStore';
import {
  Wrapper,
  Container,
  Header,
  SignInForm,
  DividesFields,
  NameContainer,
  BtnContainer,
  PasswordContainer,
} from '../styles/pages/SignIn';

export default function SignIn(): JSX.Element {
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const { user, setUser } = useStore();

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
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <h1>SignIn</h1>
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
                // onChange={onChange}
                // value={values.userName}
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
                // onChange={onChange}
                // value={values.email}
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
                    // onChange={onChange}
                    // value={values.name}
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
                    // onChange={onChange}
                    // value={values.lastName}
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
                    // onChange={onChange}
                    // value={values.password}
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
                    // onChange={onChange}
                    // value={values.confirmPassword}
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
