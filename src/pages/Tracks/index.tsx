import React, { useEffect, useState } from 'react';

import { DataTrack } from 'src/components/DataTrack';
import { Loader } from 'src/components/Loader';
import { useTrack } from 'src/contexts/Tracking';
import { useTheme } from 'src/hooks/useTheme';
import { useToast } from 'src/utils/useToast';

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
  const { isLoading, track, trackCode } = useTrack();
  const { theme } = useTheme();

  const event = track?.object[0].event.map((eventItem) => eventItem);

  console.log(event);

  // useEffect(() => {
  //   const res = trackCodeList.some((item) => item === trackCode);

  //   if (res) {
  //     setIsSaved(true);
  //   }
  // }, [trackCodeList, trackCode]);

  // const handleSave = () => {
  //   setIsSaved((prevState) => (!prevState && true));
  //   setTrackCodeList((prevState: string[]) => handleSetToList(prevState, trackCode));

  //   if (!isSaved) {
  //     useToast({
  //       message: 'Added to collection',
  //       type: 'success',
  //       icon: '🔖',
  //       background: theme.title === 'light' ? '#353230' : '#ddd',
  //       color: theme.title === 'light' ? '#eee' : '#222',
  //     });
  //   }
  // };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <PackagesHistory>
          <h1>
            {trackCode}
            <IconContainer
              onMouseEnter={() => setIcon((prevState) => !prevState)}
              onMouseLeave={() => setIcon((prevState) => !prevState)}
              // onClick={handleSave}
              isSaved={isSaved}
            >
              {showIcon(isSaved, icon)}
            </IconContainer>
          </h1>

          <TrackContainer>
            {event?.map((eventItem) => (
              <>
                <h1>{eventItem.date}</h1>
                <h1>{eventItem.hour}</h1>
                <h1>{eventItem.description}</h1>
                <h1>{eventItem.unit.unitType === 'País' ? eventItem.unit.local : eventItem.unit.city}</h1>
                <h1>{eventItem.unit.uf}</h1>
              </>
            ))}
          </TrackContainer>
        </PackagesHistory>
      )}
    </Container>
  );
};
