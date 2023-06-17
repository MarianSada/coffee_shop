import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Jost";
  }

  :root {
    background-color: #121212;
    color: #fff;
  }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: white;
  }

  input, textarea, button, select {
    font-family: inherit;
  }

  li {
    list-style-type: none;
  }

  p {
    line-height: 1.75rem;
    padding: 1rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 1.25rem 0;
  }
`

export default GlobalStyles