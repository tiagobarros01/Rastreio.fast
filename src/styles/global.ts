import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;
    list-style: none;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
  }

  body, button {
    font-family: 'Inter', sans serif;
  }

  body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
  }

  input {
    border: 0;
  }

  button {
    cursor: pointer;
    outline: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
