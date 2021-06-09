/* eslint-disable no-confusing-arrow */
import { RiTruckLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;

  margin-bottom: 1rem;

  display: flex;
  align-items: center;
`;

export const DateHour = styled.div`
  width: 6rem;

  margin-right: 0.5rem;

  text-align: center;
`;

export const Icon = styled(RiTruckLine)<{ description: string }>`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 0.5rem;

  padding: 0.5rem;
  border-radius: 0.8rem;

  background: ${({ description }) => description === 'Objeto saiu para entrega ao destinatário'
    ? ({ theme }) => theme.colors.green
    : () => description === 'Objeto entregue ao destinatário'
      ? ({ theme }) => theme.colors.blue
      : () => description === 'Objeto postado'
        ? ({ theme }) => theme.colors.red
        : ({ theme }) => theme.colors.yellow};
`;

export const Info = styled.div``;

export const Details = styled.div`
  display: flex;
`;

export const Description = styled.div`
  p {
    font-weight: bold;
  }
`;

export const State = styled.div`
  margin-right: 0.5rem;

  p {
    font-weight: bold;
  }
`;

export const City = styled.div``;
