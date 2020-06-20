import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,400i,700");
  
  html {
    font-size: 14px !important;
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white !important;
  }

  html,
  body,
   #root {
    height: 100%;
    }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;
