import React from 'react';

import { Container, DividerProps } from './styles';

export const Divider: React.FC<DividerProps> = ({
  bgColor,
  height = '2px',
  width = '100',
}) => (
  <Container bgColor={bgColor} height={height} width={width} />
  );
