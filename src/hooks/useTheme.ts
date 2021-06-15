import { useContext } from 'react';

import { ThemeContext, ThemeContextData } from '../contexts/ThemeContext';

export function useTheme(): ThemeContextData {
  const ctx = useContext(ThemeContext);

  return ctx;
}
