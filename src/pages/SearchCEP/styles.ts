import styled from 'styled-components';

import { GenericCenter } from 'src/components/GenericCenter';

export const Container = styled(GenericCenter).attrs(() => ({
  as: 'main',
}))`
  flex: 1;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};
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
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: ${({ theme }) => theme.colors.yellow[100]};
  }
`;
