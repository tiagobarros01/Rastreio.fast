import styled from 'styled-components';

export const TrackBoxContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    padding: 1rem;

    border: 0;

    background: ${({ theme }) => theme.colors.thirdBackground};

    transition: background-color 200ms;

    @media (max-width: 576px) {
      margin-top: 1rem;
      width: 45%;
    }

    :hover {
      background: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const CodeContainer = styled.div`
  @media (max-width: 576px) {
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin: 0 auto;

  text-align: center;

  margin-bottom: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;

    span {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const Input = styled.input`
  width: 20rem;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.inputText};

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
  }
`;
