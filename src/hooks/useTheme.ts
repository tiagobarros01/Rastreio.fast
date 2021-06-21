import { useContext } from 'react';

import { ThemeContextData } from '../@types/ThemeContextData';
import { ThemeContext } from '../contexts/ThemeContext';

export function useTheme(): ThemeContextData {
  const ctx = useContext(ThemeContext);

  return ctx;
}
