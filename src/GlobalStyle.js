import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
      box-sizing: inherit;
    }

    #root {
         font-family: 'Montserrat', sans-serif;
         display: flex;
         align-items: center;
         justify-content: center;
         min-height: 70vh;
         background-image: url("${background}");
         background-repeat: no-repeat;
         background-size: cover;
         background-position: center;
         margin: 0 auto;
         text-align: center;
         color: #000000;
         line-height: 2;
         font-size: 16px;
         font-weight: 400;
         padding: 15px;
    }
`;