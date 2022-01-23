import styled from 'styled-components';

import { GenericCenter } from 'src/components/GenericCenter';

export const Container = styled(GenericCenter).attrs(() => ({
  as: 'main',
}))`
  flex: 1;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.base[800]};

  img {
    width: 12rem;
    height: 12rem;

    :not(:last-child) {
      margin-right: 2rem;
    }
  }
`;
