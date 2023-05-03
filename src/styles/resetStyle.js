import { createGlobalStyle } from 'styled-components';

const resetStyle = createGlobalStyle`
    html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6
  {
      margin:0;padding:0;
  }
  h1,h2,h3,h4,h5,h6{
      font-size:100%;font-weight:normal;
  }
  a{
      color: inherit;
      text-decoration: none;
  }
  ul{
      list-style:none
  }
  button,input,select{
      margin:0;
      border: none;
      background: none;
  }
  html{
      box-sizing:border-box
  }
  *,*::before,*::after{
      box-sizing:inherit
  }
  iframe{
      border:0
  }
  table{
      border-collapse:collapse;border-spacing:0
  }
  td,th{
      padding:0
  }
`
export default resetStyle