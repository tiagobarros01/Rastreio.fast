/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';

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
  return (
    <Wrapper>
      <Container>
        <Header>
          <h1>SignIn</h1>
        </Header>
        <SignInForm id="signIn" action="" method="GET">
          <fieldset form="signIn" name="signIn-fields">
            <label htmlFor="userName">
              User name
              <br />
              <input
                type="text"
                id="userName"
                maxLength={12}
                required
              />
            </label>
            <br />
            <label htmlFor="email">
              E-mail
              <br />
              <input type="email" id="email" maxLength={28} required />
            </label>
            <br />
            <DividesFields>
              <NameContainer>
                <label htmlFor="name">
                  Name
                  <br />
                  <input type="text" id="name" maxLength={12} required />
                </label>
                <br />
                <label htmlFor="lastName">
                  Last name
                  <br />
                  <input type="text" id="lastName" maxLength={12} required />
                </label>
              </NameContainer>
              <PasswordContainer>
                <label htmlFor="password">
                  Password
                  <br />
                  <input
                    type="password"
                    id="password"
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
                    maxLength={22}
                    required
                  />
                </label>
              </PasswordContainer>
            </DividesFields>
          </fieldset>
          <BtnContainer>
            <button type="button">Enter</button>
          </BtnContainer>
        </SignInForm>
      </Container>
    </Wrapper>
  );
}
