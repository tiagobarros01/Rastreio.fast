/* eslint-disable no-confusing-arrow */
import { BiPackage } from 'react-icons/bi';
import { FiCheckCircle } from 'react-icons/fi';
import { RiTruckLine, RiArrowDownSFill } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components';

const Crescent = keyframes`
  from {
    height: 0;
  }

  to {
    height: 8rem;
  }
`;

const Fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  > div {
    display: flex;

    position: relative;

    :not(:last-child) {
      margin: 1rem 0;
    }
  }
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

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex: 1;
`;

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

export const MoreInfo = styled(RiArrowDownSFill)`
  width: 1.8rem;
  height: 1.8rem;

  background: ${({ theme }) => theme.colors.thirdBackground};

  border-radius: 0.9rem;

  margin-left: 1rem;

  cursor: pointer;

  transition: filter 200ms;

  :hover {
    filter: brightness(1.2);
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

export const DividerContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const MoreInfoContainer = styled.div`
  background: ${({ theme }) => theme.colors.thirdBackground};

  animation: ${Crescent} 600ms;

  width: 100%;
  height: 8rem;

  position: absolute;

  z-index: 99999;

  h1 {
    animation: ${Fade} 1s;
  }
`;
