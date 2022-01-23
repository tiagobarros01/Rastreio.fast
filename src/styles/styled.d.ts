import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      base: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };

      brand: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };

      red: {
        100: string;
        200: string;
      };

      green: {
        100: string;
        200: string;
      };

      blue: {
        100: string;
        200: string;
        300: string;
      };
    };
  }
}
