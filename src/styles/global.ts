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

  h1, h2, h3, p {
    color: ${(props) => props.theme.colors.text}
  }

  body, button {
    font-family: 'Poppins', sans serif;
  }

  body, input, textarea, button {
    font: 400 1rem 'Poppins', sans-serif;
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

export default GlobalStyle;
