/* eslint-disable react/require-default-props */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { Loader } from '../components/Loader';
import { useStore } from '../hooks/useStore';
import { useTrack } from '../hooks/useTrack';

interface Props extends RouteProps {
  isPrivate?: boolean;
  isAuthenticated?: boolean;
  isSigned?: boolean;
}

export const CustomRoute = ({
 isPrivate, isAuthenticated, isSigned, ...rest
}: Props): JSX.Element => {
  const { loading, trackCode, error } = useTrack();
  const { user } = useStore();

  if (loading) {
    return <Loader />;
  }

  if (isPrivate && trackCode === '' && !error) {
    return <Redirect to="/" />;
  }

  if (isAuthenticated && user === null) {
    return <Redirect to="/" />;
  }

  if (isSigned && user !== null) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
};
