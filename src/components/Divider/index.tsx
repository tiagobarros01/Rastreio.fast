import React from 'react';

import { Container } from './styles';

type DividerProps = {
  bgColor?: string;
  height?: string;
  width?: string;
};

export const Divider: React.FC<DividerProps> = ({
  bgColor,
  height = '2px',
  width = '100',
}) => <Container bgColor={bgColor} height={height} width={width} />;
