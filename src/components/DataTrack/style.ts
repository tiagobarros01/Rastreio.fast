/* eslint-disable no-confusing-arrow */
import { BiPackage } from 'react-icons/bi';
import { FiCheckCircle } from 'react-icons/fi';
import { RiTruckLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  :not(:last-child) {
    padding-bottom: 1rem;
  }

  padding: 1rem 0 0.5rem 0.5rem;
`;

export const DateHour = styled.ul`
  width: 6rem;

  text-align: center;

  li {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Posted = styled(FiCheckCircle)`
  width: 2.5rem;
  height: 2.5rem;

  margin: 0 0.5rem 0 0.5rem;

  padding: 0.5rem;
  border-radius: 0.8rem;

  background: ${({ theme }) => theme.colors.red};
`;

export const Delivered = styled(BiPackage)`
  width: 2.5rem;
  height: 2.5rem;

  margin: 0 0.5rem 0 0.5rem;

  padding: 0.5rem;
  border-radius: 0.8rem;

  background: ${({ theme }) => theme.colors.blue};
`;

export const Transit = styled(RiTruckLine)<{ description: string }>`
  width: 2.5rem;
  height: 2.5rem;

  margin: 0 0.5rem 0 0.5rem;

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

export const Description = styled.ul`
  @media (max-width: 576px) {
    max-width: 18rem;
  }

  li {
    color: ${({ theme }) => theme.colors.title};
    font-weight: bold;
  }
`;

export const State = styled.ul`
  margin-right: 0.4rem;

  li {
    color: ${({ theme }) => theme.colors.title};
    font-weight: bold;
  }
`;

export const City = styled.ul`
  li {
    color: ${({ theme }) => theme.colors.text};
  }
`;
