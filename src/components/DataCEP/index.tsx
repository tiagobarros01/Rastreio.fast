import React, { ComponentPropsWithoutRef } from 'react';

import type { ICEPProps } from 'src/@types/CEP';

import { Container } from './style';

type IDataCEPProps = ICEPProps & ComponentPropsWithoutRef<'div'>;

export const DataCEP = ({
  cep,
  fu,
  street,
  locale,
  neighborhood,
  complement,
  ...rest
}: IDataCEPProps): JSX.Element => (
  <Container {...rest}>
    <div>
      <strong>CEP:</strong>
      <p>{cep}</p>
    </div>

    <div>
      <strong>UF:</strong>
      <p>{fu}</p>
    </div>

    <div>
      <strong>STREET/AVENUE:</strong>
      <p>{street}</p>
    </div>

    <div>
      <strong>COMPLEMENT:</strong>
      <p>{complement || '" "'}</p>
    </div>
    <div>
      <strong>LOCALE:</strong>
      <p>{locale}</p>
    </div>

    <div>
      <strong>NEIGHBORHOOD:</strong>
      <p>{neighborhood}</p>
    </div>
  </Container>
);
