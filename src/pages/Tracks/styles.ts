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

  margin-top: 2rem;

  width: 100%;

  flex-direction: column;

  gap: 2rem;

  animation: ${fade} 1s;

  > h1 {

    width: 100%;
    height: 2rem;

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

  overflow-x: scroll;

  position: relative;
`;

export const Line = styled.div`
  width: 100%;
  height: 6px;

  background: ${({ theme }) => theme.colors.scndBackground};

  border-radius: 0.8rem;

  position: absolute;

  display: flex;
  align-self: center;
`;

export const EventTrack = styled.div`
  & + & {
    margin-left: 6rem;
  }

  min-width: 16rem;

  overflow: hidden;

  border-radius: 0.625rem;

  background: ${({ theme }) => theme.colors.scndBackground};

  z-index: 9999;

  strong {
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const EventTrackHeader = styled.div`
  background: ${({ theme }) => theme.colors.yellow[100]};

  padding: 0.5rem 0.75rem;

  width: 100%;

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
`;

export const EventTrackBody = styled.div`
  padding: 0.75rem;
`;
