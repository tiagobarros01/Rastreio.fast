import React from 'react';
import { v4 } from 'uuid';

import { useTrack } from '../hooks/useTrack';
import { Container, Title, ListContainer } from '../styles/pages/Bookmark';

export default function Bookmark(): JSX.Element {
  const { trackCodeList } = useTrack();

  return (
    <Container>
      <Title>
        <h1>my bookmarks</h1>
      </Title>
      <ListContainer>
        {trackCodeList.length !== 0 ? trackCodeList.map((item) => (
          <ul key={v4()}>
            <li>
              {item}
            </li>
          </ul>
        )) : <div><p>You don&apos;t have any tracks yet</p></div> }
      </ListContainer>
    </Container>
  );
}
