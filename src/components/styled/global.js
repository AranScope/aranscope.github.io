import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,400i,700");
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  @page {
    size: A4;
    margin: 0;
  }

    @media print {
        html, body {
            width: 210mm;
            height: 297mm;
            overflow: hidden;
        }
    }
    
    @page {
        size: A4;
        margin: 0;
    }
    
    @media print {
        html, body {
            width: 210mm;
            height: 297mm;
            overflow: hidden;
        }
    }
`;
