import styled from 'styled-components';

import { GenericCenter } from 'src/components/GenericCenter';

export const Container = styled(GenericCenter).attrs(() => ({
  as: 'main',
}))`
  flex: 1;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.base[800]};

  padding-bottom: 1rem;
`;

export const CEPContainer = styled.form`
  display: flex;

  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;

  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.base[100]};
  }

  span {
    color: ${({ theme }) => theme.colors.brand[400]};
  }
`;
