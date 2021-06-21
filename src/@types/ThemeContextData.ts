import { DefaultTheme } from 'styled-components';

export interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}
