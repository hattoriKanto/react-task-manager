import { IconButton, styled } from "@mui/material";

export const CustomForm = styled("form")(({ theme }) => ({
  display: "flex",
  width: "480px",
  height: "auto",
  borderRadius: "10px",

  backgroundColor: theme.palette.white.main,
}));

export const CustomWrapper = styled("div")(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "25px",
  padding: "35px",
  width: "100%",
}));

export const CustomButtonWrapper = styled(CustomWrapper)(() => ({
  padding: 0,
  flexDirection: "row",
  justifyContent: "center",
}));

export const CustomCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "10px",
  right: "20px",
}));
