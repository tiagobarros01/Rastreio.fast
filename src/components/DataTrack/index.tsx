/* eslint-disable no-nested-ternary */
import React from 'react';
import { v4 } from 'uuid';

import { DataProps } from '../../@types/DataProps';
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
} from './style';

export function DataTrack({
  cidade,
  dataHora,
  descricao,
  uf,
}: DataProps): JSX.Element {
  return (
    <Container key={v4()}>
      {dataHora ? (
        <DateHour>
          <li>{dataHora}</li>
        </DateHour>
      ) : (
        <DateHour>
          <li>--/--/---- --:--</li>
        </DateHour>
      )}
      {descricao === 'Objeto postado' ? (
        <Posted color="#fff" />
      ) : descricao === 'Objeto entregue ao destinatário' ? (
        <Delivered color="#fff" />
      ) : (
        <Transit color="#fff" description={descricao} />
      )}
      <Info>
        {descricao ? (
          <Description>
            <li>{descricao}</li>
          </Description>
        ) : (
          <Description>
            <li>--</li>
          </Description>
        )}
        <Details>
          {uf ? (
            <State>
              <li>{uf}</li>
            </State>
          ) : (
            <State>
              <li>--</li>
            </State>
          )}
          {cidade ? (
            <City>
              <li>{` | ${cidade}`}</li>
            </City>
          ) : (
            <City>
              <li>--</li>
            </City>
          )}
        </Details>
      </Info>
    </Container>
  );
}
