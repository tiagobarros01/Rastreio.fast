import { useContext } from 'react';

import type { ThemeContextData } from 'src/@types/ThemeContextData';
import { ThemeContext } from 'src/contexts/ThemeContext';

export const useTheme = (): ThemeContextData => useContext(ThemeContext);
