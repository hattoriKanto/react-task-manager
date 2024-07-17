import { Card, CardContent, Typography } from "@mui/material";
import { StyledFooter, StyledHeader } from "./CardExpanded.styles";
import React from "react";
import { Task } from "../../types";

interface CardExpandedType {
  task: Task;
}

export const CardExpanded: React.FC<CardExpandedType> = ({ task }) => {
  const { title, category } = task;

  return (
    <Card>
      <CardContent>
        <StyledHeader>
          <Typography variant="body1">{title}</Typography>
        </StyledHeader>
        <StyledFooter>
          <Typography variant="h4">{category}</Typography>
        </StyledFooter>
      </CardContent>
    </Card>
  );
};
