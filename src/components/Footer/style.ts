import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  bottom: 10px;
  position: absolute;
  
  p {
    text-align: center;
    color: ${(props) => props.theme.colors.text};

    a {
      color: ${(props) => props.theme.colors.yellow};
      transition: color 200ms;

      :hover {
        filter: brightness(.8)
      }
    }
  }
`;