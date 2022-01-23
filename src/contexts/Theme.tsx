import React, { createContext, useContext } from 'react';

import type { DefaultTheme } from 'styled-components';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { usePersistedState } from 'src/hooks/usePersistedState';
import { dark } from 'src/styles/themes/dark';
import { light } from 'src/styles/themes/light';
import { useToast } from 'src/utils/useToast';

interface IThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContextData>({
  theme: dark,
  toggleTheme: () => {
    console.log("ThemeProvider wasn't rendered 😞");
  },
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@Rastreio.fast:theme',
    dark,
  );

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);

    useToast({
      message: 'Tema alterado',
      type: 'success',
      background: theme.title === 'light' ? '#353230' : '#ddd',
      color: theme.title === 'light' ? '#eee' : '#222',
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContextData => {
  const context = useContext(ThemeContext);

  return context;
};
