import React, { useEffect, useState } from 'react';
import { BsCheck2Circle, BsTruck, BsBoxSeam } from 'react-icons/bs';

import { DashboardBase } from 'src/components/DashboardBase';
import { useTheme } from 'src/contexts/Theme';
import { useTrack } from 'src/contexts/Tracking';
import { dark } from 'src/styles/themes/dark';
import { useToast } from 'src/utils/useToast';

import {
  IconContainer,
  PlusIcon,
  SaveIcon,
  CheckIcon,
  Container,
  TrackContainer,
  EventTrack,
  EventTrackHeader,
  EventTrackBody,
} from './styles';

const showSaveIcon = (isSaved: boolean, icon: boolean) => {
  if (isSaved) {
    return <CheckIcon />;
  }

  if (icon) {
    return <SaveIcon />;
  }

  return <PlusIcon />;
};

const showTrackIcon = (status: string, theme: string) => {
  const statusIncludes = (includes: string): boolean => {
    return status.toLocaleLowerCase().includes(includes);
  };

  if (statusIncludes('entregue')) {
    return <BsBoxSeam color={theme} size="26" />;
  }

  if (statusIncludes('postado')) {
    return <BsCheck2Circle color={theme} size="26" />;
  }

  return <BsTruck color={theme} size="26" />;
};

export const Tracks = (): JSX.Element => {
  const {
    track, trackCode, setTrackCodeList, trackCodeList,
  } = useTrack();
  const { theme } = useTheme();

  const [isSaved, setIsSaved] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleSaveTrack = () => {
    if (!trackCode) return;

    if (isSaved) return;

    setIsSaved(true);
    setTrackCodeList((prevState) => [...prevState, trackCode]);

    useToast({
      message: 'Adicionado à sua coleção',
      type: 'success',
      icon: '🔖',
      background: theme.title === 'light' ? '#353230' : '#ddd',
      color: theme.title === 'light' ? '#eee' : '#222',
    });
  };

  useEffect(() => {
    const hasSaved = trackCodeList.some((item) => item === trackCode);

    if (hasSaved) {
      setIsSaved(true);
    }
  }, [trackCodeList, trackCode]);

  return (
    <DashboardBase>
      <Container>
        <h1>
          {trackCode}

          <IconContainer
            onMouseEnter={() => setIcon((prevState) => !prevState)}
            onMouseLeave={() => setIcon((prevState) => !prevState)}
            onClick={handleSaveTrack}
            isSaved={isSaved}
          >
            {showSaveIcon(isSaved, icon)}
          </IconContainer>
        </h1>

        <TrackContainer>
          {track?.events?.map((eventItem, index) => {
            const localeInfo = eventItem.locale.split('/');

            const locale = localeInfo[0];
            const city = localeInfo[1];
            const uf = localeInfo[localeInfo.length - 1];

            return (
              <EventTrack key={`Event - ${index}`}>
                <EventTrackHeader>
                  <div>
                    <strong>Data:</strong>

                    <p>
                      {`${eventItem.date} às ${eventItem.hour}`}
                    </p>
                  </div>

                  {showTrackIcon(eventItem.status, dark.colors.base[900])}
                </EventTrackHeader>

                <EventTrackBody>
                  <strong>{eventItem.status}</strong>

                  <br />

                  <p>
                    {`${locale} - ${city} - ${uf}`}
                  </p>
                </EventTrackBody>
              </EventTrack>
            );
          })}

        </TrackContainer>

        <div />
      </Container>
    </DashboardBase>
  );
};
