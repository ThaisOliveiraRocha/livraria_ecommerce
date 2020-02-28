import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
    box-sizing: inherit;
    padding: 0px;
    margin: 0px;
}
html {
    height: 100%;
    box-sizing: border-box;
    background: #ffff;
}
`;