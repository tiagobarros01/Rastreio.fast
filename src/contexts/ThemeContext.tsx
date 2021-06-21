import React, { createContext, useCallback, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { ThemeContextData } from '../@types/ThemeContextData';
import { usePersistedState } from '../hooks/usePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: dark,
  toggleTheme: () => {
    console.log("ThemeProvider isn't rendered 😞");
  },
});

function ThemeContextProvider({ children }: Props): JSX.Element {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@rastreio.fast:theme',
    dark,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
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
}

export { ThemeContext, ThemeContextProvider };
