/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import { Loader } from '../components/Loader/index';
import { useTheme } from '../hooks/useTheme';
import { useTrack } from '../hooks/useTrack';
import {
  IconContainer,
  PlusIcon,
  BookmarkIcon,
  CheckIcon,
  Container,
  PackagesHistory,
  TrackContainer,
} from '../styles/pages/Tracks';
import { useToast } from '../utils/useToast';

export default function Tracks(): JSX.Element {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [icon, setIcon] = useState<boolean>(false);
  const {
    loading,
    trackCode,
    dataTrack,
    trackCodeList,
    setTrackCodeList,
    handleSetToList,
  } = useTrack();
  const { theme } = useTheme();

  useEffect(() => {
    const res = trackCodeList.some((item) => item === trackCode);

    if (res) {
      setIsBookmarked(true);
    }
  }, [trackCodeList, trackCode]);

  function handleBookmark() {
    setIsBookmarked((prevState) => (!prevState ? true : true));
    setTrackCodeList((prevState: string[]) => handleSetToList(prevState, trackCode));
    useToast({
      message: 'Added to my bookmark',
      type: 'success',
      icon: '🔖',
      background: theme.title === 'light' ? '#353230' : '#ddd',
      color: theme.title === 'light' ? '#eee' : '#222',
    });
  }

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <PackagesHistory>
          <h1>
            {trackCode}
            <IconContainer
              onMouseEnter={() => setIcon((prevState) => !prevState)}
              onMouseLeave={() => setIcon((prevState) => !prevState)}
              onClick={handleBookmark}
              isBookmarked={isBookmarked}
            >
              {isBookmarked ? (
                <CheckIcon />
              ) : icon ? (
                <BookmarkIcon />
              ) : (
                <PlusIcon />
              )}
            </IconContainer>
          </h1>
          <TrackContainer>{dataTrack}</TrackContainer>
        </PackagesHistory>
      )}
    </Container>
  );
}
