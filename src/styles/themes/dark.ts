import { DefaultTheme } from 'styled-components';

import { defaultColors } from '../defaultColors';

export const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    ...defaultColors,

    base: {
      50: '#f3f2f1',
      100: '#d8d8d8',
      200: '#bfbfbf',
      300: '#a5a5a5',
      400: '#8c8c8c',
      500: '#727272',
      600: '#595959',
      700: '#3f3f3f',
      800: '#262626',
      900: '#0e0c0c',
    },
  },
};
