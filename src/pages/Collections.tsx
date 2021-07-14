import React, { useCallback } from 'react';
import { v4 } from 'uuid';

import { useTheme } from '../hooks/useTheme';
import { useTrack } from '../hooks/useTrack';
import {
  Container,
  Title,
  ListContainer,
  TrashIcon,
  WithoutList,
} from '../styles/pages/Collections';
import { useToast } from '../utils/useToast';

export default function Collections(): JSX.Element {
  const { trackCodeList, getTrackingData, setTrackCodeList } = useTrack();
  const { theme } = useTheme();

  const handleTrack = useCallback(
    (code: string) => {
      getTrackingData(code);
    },
    [getTrackingData],
  );

  function handleRemoveTrack(index: number) {
    trackCodeList.splice(index, 1);
    setTrackCodeList((prevState) => [...prevState]);
    useToast({
      message: 'Removes from collection',
      type: 'error',
      icon: '🗑️',
      duration: 2500,
      background: theme.title === 'light' ? '#353230' : '#ddd',
      color: theme.title === 'light' ? '#eee' : '#222',
    });
  }

  return (
    <Container>
      <Title>
        <h1>Saved</h1>
      </Title>
      <ListContainer>
        {trackCodeList.length !== 0 ? (
          trackCodeList.map((code, index) => (
            <ul key={v4()}>
              <p>{index + 1}</p>
              <li>
                <button type="button" onClick={() => handleTrack(code)}>
                  {code}
                </button>
              </li>
              <TrashIcon onClick={() => handleRemoveTrack(index)} />
            </ul>
          ))
        ) : (
          <WithoutList>
            <p>You don&apos;t have any tracks yet</p>
          </WithoutList>
        )}
      </ListContainer>
    </Container>
  );
}
