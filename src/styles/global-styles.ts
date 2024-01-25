import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";
import { cssReset } from "./css-reset";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${cssReset}

  /* Leaflet white line fix */
  /* https://github.com/Leaflet/Leaflet/issues/6541 */
  .leaflet-tile-container img {
    width: 255px !important;
    height: 255px !important;
  }

  html, body, #root {
    height: 100%;
  }

  /* Fonts */
  *, body {
    font-family: 'Montserrat', sans-serif;  
  }

  h1 {
    font-size: clamp(${(props) =>
      props.theme.fontSizes.md}, -1.0455rem + 9.0909vw, ${(props) =>
  props.theme.fontSizes.lg});
    color: ${(props) => props.theme.colors.darkGreen};
    margin-bottom: 1.5rem;
    font-weight: 900;
    font-style: italic;
  }



`;
