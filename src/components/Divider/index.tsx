/* eslint-disable react/require-default-props */
import React from 'react';

import { Container } from './styles';

type DividerProps = {
  bgColor?: string;
  height?: string;
  width?: string;
};

export function Divider({
  bgColor,
  height = '2px',
  width = '100',
}: DividerProps): JSX.Element {
  return <Container bgColor={bgColor} height={height} width={width} />;
}
