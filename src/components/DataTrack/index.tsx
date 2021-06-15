/* eslint-disable no-nested-ternary */
import React from 'react';

import { DataProps } from '../../types/DataProps';
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
  cidade, dataHora, descricao, uf,
}: DataProps): JSX.Element {
  return (
    <Container>
      {dataHora ? (
        <DateHour>
          <p>{dataHora}</p>
        </DateHour>
      ) : (
        <DateHour>
          <p>--/--/---- --:--</p>
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
            <p>{descricao}</p>
          </Description>
        ) : (
          <Description>
            <p>--</p>
          </Description>
        )}
        <Details>
          {uf ? (
            <State>
              <p>{uf}</p>
            </State>
          ) : (
            <State>
              <p>--</p>
            </State>
          )}
          {cidade ? (
            <City>
              <p>{` | ${cidade}`}</p>
            </City>
          ) : (
            <City>
              <p>--</p>
            </City>
          )}
        </Details>
      </Info>
    </Container>
  );
}
