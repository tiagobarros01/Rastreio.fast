import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;
    list-style: none;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    overflow: hidden;
  }

  h1, h2, h3, p {
    color: ${({ theme }) => theme.colors.text}
  }

  body, button {
    font-family: 'Poppins', sans serif;
  }

  body, input, textarea, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  input {
    border: 0;

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:active {
      border: 1px solid ${({ theme }) => theme.colors.background};
      -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
      box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background} inset !important;
      transition: background-color 5000s ease-in-out 0s, border 100ms;
      :focus {
        border: 3px solid ${({ theme }) => theme.colors.yellow};
      }
    }
  }

  button {
    cursor: pointer;
    outline: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1366px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 1200px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 992px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 81.25%;
    }
  }

  @media (max-width: 576px) {
    html {
      font-size: 75%;
    } 
  }
`;
