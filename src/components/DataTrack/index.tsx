import React, { useState } from 'react';

import { v4 } from 'uuid';

import { Divider } from '../Divider';
import {
  Container,
  DateHour,
  Posted,
  Delivered,
  Transit,
  State,
  City,
  Description,
  Info,
  Details,
  MoreInfo,
  DividerContainer,
  MoreInfoContainer,
} from './style';

const iconColor = {
  color: '#fff',
};

const showIcon = (description: string) => {
  if (description === 'Objeto postado') {
    return <Posted {...iconColor} />;
  }

  if (description === 'Objeto entregue ao destinatário') {
    return <Delivered {...iconColor} />;
  }

  return <Transit description={description} {...iconColor} />;
};

export const DataTrack = ({
  data,
  hora,
  descricao,
  unidade: { cidade, uf },
  length,
}: any): JSX.Element => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <Container key={v4()}>
      <div>
        <DateHour>
          <li>{data ? `${data} às ${hora}` : '--/--/---- --:--'}</li>
        </DateHour>

        {showIcon(descricao)}

        <Info>
          <div>
            <Description>
              <li>{descricao || '--'}</li>
            </Description>

            <Details>
              <State>
                <li>{uf || '--'}</li>
              </State>

              <City>
                <li>{cidade ? ` | ${cidade}` : '--'}</li>
              </City>
            </Details>
          </div>

          <MoreInfo
            onClick={() => setMoreInfo((prevState) => !prevState)}
            name="ArrowDown"
            {...iconColor}
          />
        </Info>
      </div>

      {moreInfo && (
        <MoreInfoContainer>
          <h1>SALVEE</h1>
        </MoreInfoContainer>
      )}

      <DividerContainer>{!length && <Divider width="100" />}</DividerContainer>
    </Container>
  );
};
