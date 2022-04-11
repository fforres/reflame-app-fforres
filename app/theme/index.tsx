import { createStitches } from "@stitches/react";

const stitches = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: number) => ({ marginTop: value, marginBottom: value }),
  },
});

export const styled = stitches.styled;

export const css = stitches.css;

export const keyframes = stitches.keyframes;

export const getCssText = stitches.getCssText;

export const theme = stitches.theme;

export const createTheme = stitches.createTheme;

export const config = stitches.config;

// export const globalStyles = globalCss({
//     "*": {
//         margin: 0,
//         padding: 0,
//     }
// })
