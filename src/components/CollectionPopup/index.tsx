import React, { ComponentPropsWithoutRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Container, Icon } from './style';

type ICollectionPopupProps = ComponentPropsWithoutRef<'div'>;

export const CollectionPopup = (props: ICollectionPopupProps): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container
      location={pathname === '/collections'}
      onClick={() => navigate('/collections')}
      {...props}
    >
      <Icon />
    </Container>
  );
};
