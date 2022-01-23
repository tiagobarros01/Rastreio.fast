import React, { useEffect, useState } from 'react';
import { BsCheck2Circle, BsTruck, BsBoxSeam } from 'react-icons/bs';

import { DefaultTheme } from 'styled-components';

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
  Line,
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
  const statusIncludes = (includes: string) => {
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
  const { track, trackCode } = useTrack();
  const { theme } = useTheme();

  const [isSaved, setIsSaved] = useState(false);
  const [icon, setIcon] = useState(false);

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
    <DashboardBase>
      <Container>
        <h1>
          {trackCode}

          <IconContainer
            onMouseEnter={() => setIcon((prevState) => !prevState)}
            onMouseLeave={() => setIcon((prevState) => !prevState)}
              // onClick={handleSave}
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

          {/* <Line /> */}
        </TrackContainer>
      </Container>
    </DashboardBase>
  );
};
