import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100vw;

  position: fixed;
  bottom: 10px;

  z-index: 3;

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};

    a {
      color: ${({ theme }) => theme.colors.yellow};
      transition: color 200ms;

      :hover {
        filter: brightness(0.8);
      }
    }
  }
`;
