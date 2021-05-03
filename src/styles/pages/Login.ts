import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  background: ${(props) => props.theme.colors.secondary};
`;

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 1rem;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 3.5rem;
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.third};
    font-weight: bold;
  }

  a {
    color: ${(props) => props.theme.colors.yellow};
    text-decoration: underline ${(props) => props.theme.colors.yellow} 2px;

    :hover {
      filter: brightness(1.2)
    }
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 2rem;
  
  fieldset {
    border: 0;
  }
  
  label {
    color: ${(props) => props.theme.colors.third};
    font-weight: bold;
  }

  input {
    width: 30rem;
    padding: 1rem;
    border-radius: 10px;

    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;
    
    border: 0;
    outline: 0;

    margin-bottom: 1rem;

    :focus {
      border: 3px solid ${(props) => props.theme.colors.yellow}
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-top: .5rem;
    margin-bottom: 1.5rem;

    a {
      color: ${(props) => props.theme.colors.third};
      font-weight: 700;
      text-decoration: underline;

      transition: filter 200ms;


      :hover {
        filter: brightness(1.8);
      }
    }

    button {
      width: 7.5rem; 
      height: 3.5rem;
      border-radius: 10px;
      border: 0;

      background: ${(props) => props.theme.colors.yellow};
      font-weight: bold;

      margin-left: 1rem;

      transition: background 400ms;

      :hover {
        background: ${(props) => props.theme.colors.text};
      }
    }
  }
`;
