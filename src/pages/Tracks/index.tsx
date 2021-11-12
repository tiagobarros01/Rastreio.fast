import React, { useEffect, useState } from 'react';

import { Loader } from '../../components/Loader/index';
import { useTheme } from '../../hooks/useTheme';
import { useTrack } from '../../hooks/useTrack';
import { useToast } from '../../utils/useToast';
import {
  IconContainer,
  PlusIcon,
  SaveIcon,
  CheckIcon,
  Container,
  PackagesHistory,
  TrackContainer,
} from './styles';

const showIcon = (isSaved: boolean, icon: boolean) => {
  if (isSaved) {
    return <CheckIcon />;
  }

  if (icon) {
    return <SaveIcon />;
  }

  return <PlusIcon />;
};

export const Tracks = (): JSX.Element => {
  const [isSaved, setIsSaved] = useState(false);
  const [icon, setIcon] = useState(false);
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
      setIsSaved(true);
    }
  }, [trackCodeList, trackCode]);

  function handleSave() {
    setIsSaved((prevState) => (!prevState && true));
    setTrackCodeList((prevState: string[]) => handleSetToList(prevState, trackCode));

    if (!isSaved) {
      useToast({
        message: 'Added to collection',
        type: 'success',
        icon: '🔖',
        background: theme.title === 'light' ? '#353230' : '#ddd',
        color: theme.title === 'light' ? '#eee' : '#222',
      });
    }
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
              onClick={handleSave}
              isSaved={isSaved}
            >
              {showIcon(isSaved, icon)}
            </IconContainer>
          </h1>
          <TrackContainer>{dataTrack}</TrackContainer>
        </PackagesHistory>
      )}
    </Container>
  );
};
