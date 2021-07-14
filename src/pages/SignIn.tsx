import React, { FormEvent, useRef } from 'react';

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
  const userNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const refs = {
      userName: userNameInputRef.current?.value,
      email: emailInputRef.current?.value,
      name: nameInputRef.current?.value,
      lastName: lastNameInputRef.current?.value,
      password: passwordInputRef.current?.value,
      passwordConfirm: passwordConfirmInputRef.current?.value,
    };

    console.log(refs);
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
                ref={userNameInputRef}
                maxLength={12}
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
                ref={emailInputRef}
                maxLength={28}
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
                    ref={nameInputRef}
                    maxLength={12}
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
                    ref={lastNameInputRef}
                    maxLength={12}
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
                    ref={passwordInputRef}
                    maxLength={22}
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
                    ref={passwordConfirmInputRef}
                    maxLength={22}
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
