import styled from 'styled-components';

export const TrackBoxContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  padding-top: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & button {
    padding: 1rem;
    
    border: 0;

    background: ${(props) => props.theme.colors.secondary};

    &:hover {
      background: ${(props) => props.theme.colors.yellow};
    }

  }
`;

export const Title = styled.div`
  width: 100%;
  margin: 0 auto;

  text-align: center;

  margin-bottom: 3rem;

  & h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 3rem;

    & span {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
`;

export const Input = styled.input`
  width: 20rem;
  padding: 1rem;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
