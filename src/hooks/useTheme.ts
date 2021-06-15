import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

export function useTheme() {
  const ctx = useContext(ThemeContext);

  return ctx;
}
