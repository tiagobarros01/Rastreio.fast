import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { Loader } from 'src/components/Loader';
import { useTrack } from 'src/hooks/useTrack';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
}

export const CustomRoute: React.FC<CustomRouteProps> = ({
 isPrivate, ...rest
}): JSX.Element => {
  const { loading, trackCode, error } = useTrack();

  if (loading) {
    return <Loader />;
  }

  // if (isPrivate && trackCode === '' && !error) {
  //   return <Redirect to="/" />;
  // }

  return <Route {...rest} />;
};
