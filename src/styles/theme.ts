export const theme = {
  colors: {
    primary: "#236F21",
    lightGreen: "#D3E2D3",
    darkGreen: "#123811",
    grey: "grey",
    error: "red",
  },
  breakpoints: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
};

export type Theme = typeof theme;
