import { AppBar, Box, IconButton, styled } from "@mui/material";

export const CustomHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.blue.main,
}));

export const CustomHeaderWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "10px",
}));

export const CustomAddButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.darkBlue.main,

  svg: {
    color: theme.palette.white.main,
  },

  ":hover": {
    backgroundColor: theme.palette.white.main,

    svg: {
      color: theme.palette.darkBlue.main,
    },
  },
}));
