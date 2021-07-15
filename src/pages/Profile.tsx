import React from 'react';

import { useStore } from '../hooks/useStore';
import { useRoutes } from '../services/useRoutes';

export default function Profile(): JSX.Element {
  const { setUser } = useStore();

  const SignOut = () => {
    setUser(null);
    useRoutes('/');
  };

  return (
    <div
      style={{ height: '100vh', display: 'grid', placeItems: 'center' }}
    >
      <button type="button" onClick={SignOut}>SIgnOut</button>
    </div>
  );
}
