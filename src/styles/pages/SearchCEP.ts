import styled from 'styled-components';

export const CEPContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};

  button {
    padding: 1rem;

    border: 0;

    background: ${({ theme }) => theme.colors.thirdBackground};

    transition: background-color 200ms;

    :hover {
      background: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const CEPTitle = styled.div`
  width: 100%;
  text-align: center;

  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const CEPInput = styled.input`
  width: 20rem;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.inputText};

  outline: 0;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
  }
`;
