/* eslint-disable no-confusing-arrow */
import { BiPackage } from 'react-icons/bi';
import { FiCheckCircle } from 'react-icons/fi';
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

export const Posted = styled(FiCheckCircle)`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 0.5rem;

  padding: 0.5rem;
  border-radius: 0.8rem;

  background: ${({ theme }) => theme.colors.red};
`;

export const Delivered = styled(BiPackage)`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 0.5rem;

  padding: 0.5rem;
  border-radius: 0.8rem;

  background: ${({ theme }) => theme.colors.blue};
`;

export const Transit = styled(RiTruckLine)<{ description: string }>`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 0.5rem;

  padding: 0.5rem;
  border-radius: 0.8rem;

  background: ${({ description }) => description === 'Objeto saiu para entrega ao destinatário'
    ? ({ theme }) => theme.colors.green
    : () => description === 'Objeto entregue ao destinatário'
      ? ({ theme }) => theme.colors.blue
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
  margin-right: 0.4rem;

  p {
    font-weight: bold;
  }
`;

export const City = styled.div``;
