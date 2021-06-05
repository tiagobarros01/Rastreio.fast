import styled from 'styled-components';

export const CEPContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme.colors.scndBackground};

  button {
    padding: 1rem;
    
    border: 0;

    background: ${(props) => props.theme.colors.thirdBackground};

    transition: background-color 200ms;

    :hover {
      background: ${(props) => props.theme.colors.yellow};
    }

  }

`;

export const CEPTitle = styled.div`
  width: 100%;
  text-align: center;

  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.text};
  }

  span {
    color: ${(props) => props.theme.colors.yellow};
  }
`;

export const CEPInput = styled.input`
  width: 20rem;
  padding: 1rem;

  background: ${(props) => props.theme.colors.inputBackground};
  color: ${(props) => props.theme.colors.inputText};

  outline: 0;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
  }
`;
