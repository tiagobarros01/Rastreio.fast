import styled from 'styled-components';

export interface DividerProps {
  bgColor?: string;
  height?: string;
  width?: string;
}

export const Container = styled.div<DividerProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width}%;

  background: ${({ bgColor, theme }) => (bgColor || theme.colors.thirdBackground)};
`;
