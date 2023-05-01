import { createGlobalStyle } from 'styled-components';
import styleParams from './styleParams';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0 auto;
    font-size: 62.5%;
    @media ${styleParams.device.laptop} {
      max-width: 1440px;
    }
  }
  
  body {
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    background: ${styleParams.color.bgStandard};
    font-family: 'Montserrat', Helvetica, Sans-Serif;
    color: ${styleParams.color.primary};
    font-size: 1.8rem;
    @media ${styleParams.device.laptop} {
      padding: 40px 100px;
    }
  }
`;
 
export default GlobalStyle;