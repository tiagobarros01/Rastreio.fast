import { useContext } from 'react';

import type { ThemeContextData } from '../@types/ThemeContextData';
import { ThemeContext } from '../contexts/ThemeContext';

export const useTheme = (): ThemeContextData => useContext(ThemeContext);
