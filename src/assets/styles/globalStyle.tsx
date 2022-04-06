import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}
	
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

body {
	font-family: 'Nunito', sans-serif;
  min-height:100vh;
  font-weight: 600;
	}
`;
