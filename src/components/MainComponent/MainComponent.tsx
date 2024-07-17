import { Main } from "./MainComponent.styles";
import { SectionComponent } from "../SectionComponent/SectionComponent";
import { Box, Typography } from "@mui/material";
import { TableComponent } from "../TableComponent/TableComponent";
import { CardExpanded } from "../CardExpanded/CardExpanded";
import { useEffect, useState } from "react";
import { getAllTasks } from "../../api/api";
import { Task } from "../../types";

export const MainComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedTasks = await getAllTasks();

      setTasks(fetchedTasks);
    })();
  }, []);

  return (
    <Main>
      <SectionComponent>
        <Typography variant="h2">Choose fresh ideas to do</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {tasks.map((task) => {
            const { id } = task;

            return (
              <CardExpanded
                key={id}
                task={task}
              />
            );
          })}
        </Box>
      </SectionComponent>
      <SectionComponent>
        <Typography variant="h2">Completed challenges</Typography>
        <TableComponent />
      </SectionComponent>
    </Main>
  );
};
