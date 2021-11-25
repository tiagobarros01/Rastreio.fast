import React, { createContext, useCallback, useMemo } from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import { ThemeContextData } from '../@types/ThemeContextData';
import { usePersistedState } from '../hooks/usePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { useToast } from '../utils/useToast';

const ThemeContext = createContext<ThemeContextData>({
  theme: dark,
  toggleTheme: () => {
    console.log("ThemeProvider wasn't rendered 😞");
  },
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@Rastreio.fast:theme',
    dark,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
    useToast({
      message: 'Tema alterado',
      type: 'success',
      background: theme.title === 'light' ? '#353230' : '#ddd',
      color: theme.title === 'light' ? '#eee' : '#222',
    });
  }, [setTheme, theme.title]);

  const memoizedValue = useMemo(() => {
    const values: ThemeContextData = {
      theme,
      toggleTheme,
    };
    return values;
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
