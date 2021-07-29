import styled from 'styled-components';

export const Container = styled.div<{ bgColor?: string; height?: string; width?: string; }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width}%;

  background: ${({ bgColor, theme }) => (bgColor || theme.colors.thirdBackground)};
`;
