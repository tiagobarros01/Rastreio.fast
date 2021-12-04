import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      scndBackground: string;
      thirdBackground: string;
      inputBackground: string;

      title: string;
      inputText: string;
      text: string;

      textHover: string;

      shadow: string;

      yellow: {
        100: string;
      },

      red: {
        100: string;
        200: string;
      },

      green: {
        100: string;
        200: string;
      },

      blue: {
        100: string;
        200: string;
        300: string;
      },
    };
  }
}
