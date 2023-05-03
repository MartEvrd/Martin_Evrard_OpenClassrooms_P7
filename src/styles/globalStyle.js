import { createGlobalStyle } from 'styled-components';
import styleParams from './styleParams';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0 auto;
    font-size: 62.5%;
    @media ${styleParams.device.laptop} {
    }
  }
  
  body {
    margin: 0 auto;
    padding: 0px;
    width: 100%;
    background: ${styleParams.color.bgStandard};
    font-family: 'Montserrat', Helvetica, Sans-Serif;
    color: ${styleParams.color.primary};
    font-size: 1.8rem;
  }

  main {
    min-height: calc(100vh - ${styleParams.headerHeight.mobile} - ${styleParams.footerHeight});
    @media ${styleParams.device.laptop} {
      min-height: calc(100vh - ${styleParams.headerHeight.laptop} - ${styleParams.footerHeight});
    }
  }
`;
 
export default GlobalStyle;