import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      neutral: {
        100: string;
        300: string;
        500: string;
        700: string;
        900: string;
      };
    };

    fontSize: {
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
