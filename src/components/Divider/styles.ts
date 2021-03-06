import { ComponentPropsWithoutRef } from 'react';

import styled from 'styled-components';

export interface DividerProps extends ComponentPropsWithoutRef<'div'> {
  bgColor?: string;
  height?: string;
  width?: string;
}

export const Container = styled.div<DividerProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width}%;

  background: ${({ bgColor, theme }) => (bgColor || theme.colors.base[700])};
`;
