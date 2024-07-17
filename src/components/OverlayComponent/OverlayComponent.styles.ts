import { Box, styled } from "@mui/material";

export const CustomOverlay = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

export const CustomOverlayBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,

  width: "100%",
  height: "100%",

  backgroundColor: theme.palette.darkBlue.main,
  opacity: 0.8,
  zIndex: 1,
}));

export const CustomAsideForm = styled("aside")(() => ({
  position: "relative",
  zIndex: 2,
}));
