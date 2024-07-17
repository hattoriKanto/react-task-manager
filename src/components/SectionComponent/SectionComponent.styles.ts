import { styled } from "@mui/material";

export const Section = styled("section")(() => ({
  width: "100%",

  ":last-child": {
    paddingBottom: "100px",
  },
}));
