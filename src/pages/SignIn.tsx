/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-autofocus */
import React, {
  EventTarget,
  FormEvent,
  useCallback,
  useState,
} from 'react';

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

interface DataValues {
  userName: string;
  email: string;
  name: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export default function SignIn(): JSX.Element {
  const [values, setValues] = useState<DataValues>({} as DataValues);

  const onChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const { name, value }: EventTarget = event.target;

      setValues({
        ...values,
        [name]: value,
      });
    },
    [values],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(values);
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
                onChange={onChange}
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
                onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
                    maxLength={22}
                    required
                    autoComplete="true"
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
                    onChange={onChange}
                    maxLength={22}
                    required
                    autoComplete="true"
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
