import { Typography } from "@mui/material";
import { SectionComponet } from "../../shared";
import { TableComponent } from ".";

export const CompletedIdeas = () => {
  return (
    <SectionComponet>
      <Typography variant="h2">Completed challenges</Typography>
      <TableComponent />
    </SectionComponet>
  );
};
