import styled, { css } from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;

  padding-bottom: 0.625rem;

  background: ${({ theme }) => theme.colors.scndBackground};

  p {
    text-align: center;

    color: ${({ theme }) => theme.colors.text};

    a {
      color: ${({ theme }) => theme.colors.yellow[100]};

      transition: filter 200ms ease-in-out;

      :hover {
        ${({ theme }) => (theme.title === 'dark' ? css`
          filter: brightness(0.8);
        ` : css`
          filter: brightness(0.9);
        `)}
      }
    }
  }
`;
