import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { Loader } from 'src/components/Loader';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
}

export const CustomRoute: React.FC<CustomRouteProps> = ({
  children,
  isPrivate, ...rest
}): JSX.Element => {
  // const { loading, trackCode, error } = useTrack();

  // if (loading) {
  //   return <Loader />;
  // }

  // if (isPrivate && trackCode === '' && !error) {
  //   return <Redirect to="/" />;
  // }

  return <Route {...rest}>{children}</Route>;
};
