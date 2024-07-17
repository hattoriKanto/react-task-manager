import { createTheme } from "@mui/material";
import { customPalette } from "./palette.config";

import PusingKaliWoff from "../assets/fonts/Pusing-Kali.woff";
import PusingKaliWoff2 from "../assets/fonts/Pusing-Kali.woff2";
import PusingKaliTTF from "../assets/fonts/Pusing-Kali.ttf";

export const theme = createTheme({
  palette: customPalette,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Pusing Kali';
          src: local('Pusing Kali'), local('Pusing-Kali'),
              url(${PusingKaliWoff}) format('woff2'),
              url(${PusingKaliWoff2}) format('woff'),
              url(${PusingKaliTTF}) format('truetype');
          font-weight: 400;
          font-style: normal;
        }

        body {
          background-color: ${customPalette.darkBlue.main}
        }
      `,
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "0",
          width: "250px",
          minHeight: "200px",
          height: "auto",

          display: "flex",
          flexDirection: "column",

          backgroundColor: customPalette.white.main,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,

          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",

          ":last-child": {
            padding: 0,
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          backgroundColor: customPalette.white.main,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: "Pusing Kali, Arial, sans-serif",
      fontSize: "40px",
      color: customPalette.darkBlue.main,
    },
    h2: {
      fontFamily: "Pusing Kali, Arial, sans-serif",
      paddingBottom: "24px",
      fontSize: "64px",
      textAlign: "center",
      color: customPalette.white.main,
    },
    h3: {
      width: "100%",
      fontFamily: "Pusing Kali, Arial, sans-serif",
      fontSize: "32px",
      textAlign: "center",
    },
    h4: {
      fontSize: "16px",
      color: customPalette.white.main,
    },
  },
});
