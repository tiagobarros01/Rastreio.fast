/* eslint-disable react/require-default-props */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { Loader } from '../components/Loader';
import { useTrack } from '../hooks/useTrack';

interface Props extends RouteProps {
  isPrivate?: boolean;
}

export const CustomRoute = ({
 isPrivate, ...rest
}: Props): JSX.Element => {
  const { loading, trackCode, error } = useTrack();

  if (loading) {
    return <Loader />;
  }

  if (isPrivate && trackCode === '' && !error) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
};
