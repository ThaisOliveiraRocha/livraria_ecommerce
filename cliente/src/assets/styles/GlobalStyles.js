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
    background-color: rgb(236,236,234);
    font-family: 'museo-sans';
}

body{
  margin: 0;
}
@font-face {
    font-family: 'museo-sans';
    src: url('https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3')
        format('woff'),
      url('https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3')
        format('opentype');
    font-style: normal;
    font-weight: 300;
    font-display: swap
  }
  @font-face {
    font-family: 'museo-sans';
    src: url('https://use.typekit.net/af/a28b50/00000000000000000000e803/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/a28b50/00000000000000000000e803/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('woff'),
      url('https://use.typekit.net/af/a28b50/00000000000000000000e803/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('opentype');
    font-style: normal;
    font-weight: 500;
    font-display: swap
  }
  @font-face {
    font-family: "museo-sans";
    src: url("https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"), url("https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"), url("https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
    font-style: normal;
    font-display: swap
  }
`;
