import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      text: string;
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
