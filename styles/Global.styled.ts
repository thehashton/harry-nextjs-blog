import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  padding: 5rem 0;
  margin: 0 8vw;
`;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Outfit', sans-serif;
    margin: 0;
    padding: 0;
    background: ${({theme}) => theme.colours.background};
    color: #fff;
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  img {
    width: 100%;
  }
`;

export default GlobalStyles;