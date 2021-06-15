import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeContextData } from '../types/ThemeContextData';

export function useTheme(): ThemeContextData {
  const ctx = useContext(ThemeContext);

  return ctx;
}
