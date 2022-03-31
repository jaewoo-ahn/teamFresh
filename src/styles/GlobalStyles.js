import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    
  }
  body{
    font-family: 'Roboto', sans-serif;
    width : 1440px;
  }
`;

export default GlobalStyle;
