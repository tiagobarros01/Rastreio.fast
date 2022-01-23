import { DefaultTheme } from 'styled-components';

import { defaultColors } from '../defaultColors';

export const light: DefaultTheme = {
  title: 'light',

  colors: {
    ...defaultColors,

    base: {
      50: '#0e0c0c',
      100: '#262626',
      200: '#3f3f3f',
      300: '#595959',
      400: '#727272',
      500: '#8c8c8c',
      600: '#a5a5a5',
      700: '#bfbfbf',
      800: '#d8d8d8',
      900: '#f3f2f1',
    },
  },
};
