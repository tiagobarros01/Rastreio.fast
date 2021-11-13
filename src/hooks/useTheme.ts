import { useContext } from 'react';

import { ThemeContextData } from '../@types/ThemeContextData';
import { ThemeContext } from '../contexts/ThemeContext';

export const useTheme = (): ThemeContextData => useContext(ThemeContext);
