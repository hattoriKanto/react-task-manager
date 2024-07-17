import { styled } from "@mui/material";

export const CustomCellContent = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: "100%",
  padding: "10px",

  borderRadius: "30px",

  textAlign: "center",
  color: theme.palette.paper.main,
  backgroundColor: theme.palette.blue.main,
}));

export const CustomIDCellContent = styled(CustomCellContent)(() => ({
  padding: "5px 10px",
  width: "unset",
}));
