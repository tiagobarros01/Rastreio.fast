/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { FormEvent, useCallback, useState } from 'react';

import GlobalStyle from '../styles/global';
import {
  Container,
  FormContainer,
  Header,
  LoginForm,
  Details,
} from '../styles/pages/Login';

interface DataValues {
  emailOrUserName: string;
  password: string;
}

export default function Login(): JSX.Element {
  const [values, setValues] = useState<DataValues>({} as DataValues);

  const onChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    const { name, value }: any = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }, [values]);

  function onSubmit(event: any) {
    event.preventDefault();

    console.log(values);
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
                  autoComplete="email"
                  maxLength={28}
                  onChange={onChange}
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
                  autoComplete="password"
                  maxLength={22}
                  onChange={onChange}
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
