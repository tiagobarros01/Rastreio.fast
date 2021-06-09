import React from 'react';

import { DataProps } from '../../types/DataProps';
import {
  Container,
  DateHour,
  Icon,
  State,
  City,
  Description,
  Info,
  Details,
} from './style';

export function DataTrack({
  cidade, dataHora, descricao, uf,
}: DataProps) {
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
      <Icon color="#fff" description={descricao} />
      <Info>
        {descricao ? (
          <Description>
            <p>{descricao}</p>
          </Description>
        ) : (
          <Description>
            <p>There&apos;s no information</p>
          </Description>
        )}
        <Details>
          {uf ? (
            <State>
              <p>{uf}</p>
            </State>
          ) : (
            <State>
              <p>There&apos;s no information</p>
            </State>
          )}
          {cidade ? (
            <City>
              <p>{cidade}</p>
            </City>
          ) : (
            <City>
              <p>There&apos;s no information</p>
            </City>
          )}
        </Details>
      </Info>
    </Container>
  );
}
