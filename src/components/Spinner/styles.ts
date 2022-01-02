import styled, { keyframes } from 'styled-components';

const spinnerFade = keyframes`
  0% {
    background-color: #555;
  }

  100% {
    background-color: transparent
  }
`;

export const Container = styled.div`
  font-size: 22px;

  position: relative;

  display: inline-block;

  width: 1em;
  height: 1em;

  & .center {
    position: absolute;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    margin: auto;
  }
`;

export const Blade = styled.div`
  position: absolute;

  left: 0.4629em;
  bottom: 0;

  width: 0.08em;
  height: 0.3em;

  border-radius: 0.0555em;
  background-color: transparent;
  transform-origin: center -0.2222em;
  animation: ${spinnerFade} 1s infinite linear;

  animation-delay: 0s;

  :nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    transform: rotate(0deg);
  }

  :nth-child(2) {
    -webkit-animation-delay: 0.083s;
    animation-delay: 0.083s;
    transform: rotate(30deg);
  }

  :nth-child(3) {
    -webkit-animation-delay: 0.166s;
    animation-delay: 0.166s;
    transform: rotate(60deg);
  }

  :nth-child(4) {
    -webkit-animation-delay: 0.249s;
    animation-delay: 0.249s;
    transform: rotate(90deg);
  }

  :nth-child(5) {
    -webkit-animation-delay: 0.332s;
    animation-delay: 0.332s;
    transform: rotate(120deg);
  }

  :nth-child(6) {
    -webkit-animation-delay: 0.415s;
    animation-delay: 0.415s;
    transform: rotate(150deg);
  }

  :nth-child(7) {
    -webkit-animation-delay: 0.498s;
    animation-delay: 0.498s;
    transform: rotate(180deg);
  }

  :nth-child(8) {
    -webkit-animation-delay: 0.581s;
    animation-delay: 0.581s;
    transform: rotate(210deg);
  }

  :nth-child(9) {
    -webkit-animation-delay: 0.664s;
    animation-delay: 0.664s;
    transform: rotate(240deg);
  }

  :nth-child(10) {
    -webkit-animation-delay: 0.747s;
    animation-delay: 0.747s;
    transform: rotate(270deg);
  }

  :nth-child(11) {
    -webkit-animation-delay: 0.83s;
    animation-delay: 0.83s;
    transform: rotate(300deg);
  }

  :nth-child(12) {
    -webkit-animation-delay: 0.913s;
    animation-delay: 0.913s;
    transform: rotate(330deg);
  }
`;
