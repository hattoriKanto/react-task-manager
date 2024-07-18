import { Box, Card, styled } from "@mui/material";

export const CustomCard = styled(Card)(() => ({
  width: "250px",
  cursor: "pointer",

  transition: "300ms",

  "&:hover": {
    scale: "1.1",
  },
}));

export const CustomBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "10px",
}));

export const CustomCardHeader = styled(CustomBox)(() => ({
  flex: 4,
}));

export const CustomCardFooter = styled(CustomBox)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.blue.main,
}));
