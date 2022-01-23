import React from 'react';
import { Navigate } from 'react-router-dom';

import { useTrack } from 'src/contexts/Tracking';

interface PrivateRouteProps {
  redirectTo: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo,
}): JSX.Element => {
  const { trackCode } = useTrack();

  if (!trackCode) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
};
