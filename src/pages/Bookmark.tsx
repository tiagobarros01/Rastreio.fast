import React from 'react';

import { useTrack } from '../hooks/useTrack';
import { Container } from '../styles/pages/Bookmark';

export default function Bookmark(): JSX.Element {
  const { trackCodeList } = useTrack();

  console.log(trackCodeList.length - 1);

  return (
    <Container>
      <h1>my bookmarks</h1>
      {trackCodeList.map((item) => (
        <>
          <p style={{ marginRight: 10 }}>{item}</p>
        </>
      ))}
    </Container>
  );
}
