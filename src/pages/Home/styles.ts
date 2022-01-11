import styled from 'styled-components';

import { GenericCenter } from 'src/components/GenericCenter';

export const Container = styled(GenericCenter).attrs(() => ({
  as: 'main',
}))`
  flex: 1;

  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const FormContainer = styled.form`
  display: flex;

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  text-align: center;

  margin-bottom: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;

    span {
      color: ${({ theme }) => theme.colors.yellow[100]};
    }
  }
`;
