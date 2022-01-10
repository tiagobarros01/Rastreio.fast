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
  max-height: 32rem;

  padding: 1rem;

  overflow-y: scroll;

  background: ${({ theme }) => theme.colors.scndBackground};

  border-radius: 0.8rem;

  ::-webkit-scrollbar {
    width: 0.8rem;
    background: ${({ theme }) => theme.colors.thirdBackground};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.yellow[100]};
    border-radius: 0.5rem;
  }
`;
