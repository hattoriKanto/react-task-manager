import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
    darkBlue: Palette["primary"];
    paper: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
    darkBlue?: PaletteOptions["primary"];
    paper?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

export const customPalette = {
  blue: {
    main: "#657ED4",
  },
  darkBlue: {
    main: "#002642",
  },
  paper: {
    main: "#F3E8EE",
  },
  white: {
    main: "#fff",
  },
};
