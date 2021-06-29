import React, { useCallback } from 'react';
import { v4 } from 'uuid';

import { useTrack } from '../hooks/useTrack';
import { Container, Title, ListContainer } from '../styles/pages/Bookmark';

export default function Bookmark(): JSX.Element {
  const { trackCodeList, getTrackingData } = useTrack();

  const handleTrack = useCallback((code: string) => {
    getTrackingData(code);
  }, [getTrackingData]);

  return (
    <Container>
      <Title>
        <h1>my bookmarks</h1>
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
            </ul>
          ))
        ) : (
          <div>
            <p>You don&apos;t have any tracks yet</p>
          </div>
        )}
      </ListContainer>
    </Container>
  );
}
