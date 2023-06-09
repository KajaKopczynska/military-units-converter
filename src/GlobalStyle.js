import { createGlobalStyle } from "styled-components";
import background from "./background2.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
      box-sizing: inherit;
    }

    #root {
         font-family: 'Jost', sans-serif;
         display: flex;
         align-items: flex-start;
         justify-content: center;
         min-height: 100vh;
         background-image: url("${background}");
         background-repeat: no-repeat;
         background-size: cover;
         background-position: 50% 20%;
         margin: 0 auto;
         text-align: center;
         color: #222;
         line-height: 2;
         font-size: 16px;
         font-weight: 400;
         padding: 15px;
    }
`;