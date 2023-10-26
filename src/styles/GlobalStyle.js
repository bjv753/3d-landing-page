import { createGlobalStyle } from "styled-components";
import fontLight from "../assets/fonts/SourceSansPro-Light.ttf"
import fontRegular from "../assets/fonts/SourceSansPro-Regular.ttf"

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after {
      margin: 0;
      padding: 0;
`
h1,h2,h3,h4,h5,h6{
      margin: 0;
      padding: 0;
}

@font-face {
      font-family: 'Source Sans Pro light';
      src: local('Source Sans Pro light'), url( )
}