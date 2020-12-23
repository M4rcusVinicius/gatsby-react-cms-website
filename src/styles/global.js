import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 100%;
    font-family: 'Nunito', sans-serif;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  body.light {
    --blue: #2c4be4;
    --blueDark: #001789;
    --blueSoft: #003e9b;
    --blueClear: #2885ff;
    --blueStrDark: #1b203a;
    --blueStrSoft: #132e57;
    --blueStrClear: #327ad9;
    --dark: #0e0e0e;
    --soft: #2a2a2a;
    --clear: #6f6f6f;
    --light: #d5d5d5;
    --background: #F8F8F8;
    --base: #fff;
  }

  body.dark {
    --primaryBackground: #1A202C;
    --secondaryBackground: #2D3748;
    --activeBackground: #718096;
    --border: #718096;
  }
`
export default GlobalStyles

