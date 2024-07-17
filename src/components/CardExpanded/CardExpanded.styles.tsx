import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "10px",
}));

export const StyledHeader = styled(StyledBox)(() => ({
  flex: 4,
}));

export const StyledFooter = styled(StyledBox)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.blue.main,
}));
