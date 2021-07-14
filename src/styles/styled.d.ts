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

      yellow: string;

      red: string;
      DarkRed: string;

      green: string;
      DarkGreen: string;

      blue: string;
      DarkBlue: string;

      TwitterBlue: string;
    };
  }
}
