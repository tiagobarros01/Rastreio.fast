/* eslint-disable no-nested-ternary */
import styled, { keyframes } from 'styled-components';

const firstJump = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const scndJump = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const thirdJump = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
    transform: translateX(-30%);

  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const Details = styled.div`
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors.DarkRed};
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const Info = styled.div`
  height: 5.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  border-radius: 0.3rem;

  background: ${({ theme }) => theme.colors.DarkRed};

  animation: ${fade} 1.8s ease-out;

  :hover {
    cursor: not-allowed;
  }

  p {
    color: ${({ theme }) => (theme.title === 'light' ? '#222' : '#ddd')};

    font-weight: 500;
    font-size: 1.1rem;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
`;

export const PointContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Point = styled.div<{ position: string }>`
  width: 0.5rem;
  height: 0.5rem;

  background: #fff;

  border-radius: 50%;

  animation: ${({ position }) => (position === 'first'
    ? firstJump
    : position === 'second'
      ? scndJump
      : position === 'third'
        ? thirdJump
        : '')} ${({ position }) => (position === 'first'
  ? '800ms'
  : position === 'second'
    ? '830ms'
    : position === 'third'
      ? '860ms'
      : '')} ease-in-out infinite;

  :not(:first-of-type) {
    margin-left: 0.7rem;
  }
`;
