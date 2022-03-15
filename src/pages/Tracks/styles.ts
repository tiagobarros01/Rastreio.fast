import { BsBookmarkPlus, BsBookmarkFill, BsBookmarkCheck } from 'react-icons/bs';

import styled, { keyframes } from 'styled-components';

import { GenericCenter } from 'src/components/GenericCenter';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SaveIconBaseStyles = styled.svg`
  color: ${({ theme }) => theme.colors.green[100]};
  margin-left: 1rem;
`;

export const Container = styled(GenericCenter)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 2rem;

  width: 100%;

  gap: 2rem;

  animation: ${fade} 1s;

  @media (max-width: 576px) {
    justify-content: flex-start;

    overflow: hidden;
  }

  > h1 {
    width: 100%;
    height: 2rem;

    padding-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IconContainer = styled.div<{ isSaved: boolean }>`
  display: flex;

  cursor: ${({ isSaved }) => (!isSaved ? 'pointer' : 'initial')} ;
`;

export const PlusIcon = styled(SaveIconBaseStyles).attrs(() => ({
  as: BsBookmarkPlus,
}))``;

export const SaveIcon = styled(SaveIconBaseStyles).attrs(() => ({
  as: BsBookmarkFill,
}))``;

export const CheckIcon = styled(SaveIconBaseStyles).attrs(() => ({
  as: BsBookmarkCheck,
}))``;

export const TrackContainer = styled.div`
  width: 95%;

  padding: 1rem;

  display: flex;

  overflow: auto;

  position: relative;

  gap: 1.8rem;

  @media (max-width: 576px) {
    flex-direction: column;

    position: relative;

    padding-left: 4rem;

    ::after {
      content: '';

      width: 3px;
      height: 100%;

      background: ${({ theme }) => theme.colors.base[700]};

      position: absolute;
      bottom: 0;
      left: 5%;

      z-index: 99999999;
    }
  }
`;

export const EventTrack = styled.div`
  min-width: 16rem;

  overflow: hidden;

  border-radius: 0.625rem;

  background: ${({ theme }) => theme.colors.base[800]};

  z-index: 9999;


  strong {
    color: ${({ theme }) => theme.colors.base[50]};
  }

  p {
    color: ${({ theme }) => theme.colors.base[100]};
  }

  @media (max-width: 576px) {
    position: relative;

    margin: 1rem 0;

    overflow: visible;

    ::after {
      content: '';

      width: 25px;
      height: 25px;

      border-radius: 25px;

      background: ${({ theme }) => theme.colors.base[700]};

      position: absolute;
      left: -14%;
      top: 37px;

      z-index: 999999;
    }
  }
`;

export const EventTrackHeader = styled.div`
  background: ${({ theme }) => theme.colors.brand[400]};

  padding: 0.5rem 0.75rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: #222;
    font-weight: 600;
  }

  > strong {
    font-weight: bold;
  }

  p {
    color: #333;
  }

  @media (max-width: 576px) {
    border-radius: 0.625rem 0.625rem 0 0;
  }
`;

export const EventTrackBody = styled.div`
  padding: 0.75rem;
`;
