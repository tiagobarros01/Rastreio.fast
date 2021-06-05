import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  SignInContainer,
  FormContainer,
  HeaderForm,
  SignInForm,
  DividesFields,
  NameContainer,
} from '../styles/pages/SignIn';
import dark from '../styles/themes/dark';

export default function SignIn() {
  return (
    <ThemeProvider theme={dark}>
      <SignInContainer>
        <FormContainer>
          <HeaderForm>
            <h1>SignIn</h1>
          </HeaderForm>
          <SignInForm id="signIn" action="" method="GET">
            <fieldset form="signIn" name="signIn-fields">
              <label htmlFor="userName">
                User name
                <br />
                <input type="text" id="userName" required maxLength={12} />
              </label>
              <br />
              <label htmlFor="email">
                E-mail
                <br />
                <input type="email" id="email" required maxLength={28} />
              </label>
              <br />
              <DividesFields>
                <NameContainer>
                  <label htmlFor="name">
                    Name
                    <br />
                    <input type="text" id="name" required maxLength={12} />
                  </label>
                  <br />
                  <label htmlFor="lastName">
                    Last name
                    <br />
                    <input type="text" id="lastName" required maxLength={12} />
                  </label>
                </NameContainer>
                <br />
                <div>
                  <label htmlFor="password">
                    Password
                    <br />
                    <input
                      type="password"
                      id="password"
                      required
                      maxLength={22}
                    />
                  </label>
                  <br />
                  <label htmlFor="confirmPassword">
                    Confirm password
                    <br />
                    <input
                      type="password"
                      id="confirmPassword"
                      required
                      maxLength={22}
                    />
                  </label>
                </div>
              </DividesFields>
            </fieldset>
            <div id="btnContainer">
              <button type="button">Enter</button>
            </div>
          </SignInForm>
        </FormContainer>
      </SignInContainer>
    </ThemeProvider>
  );
}
