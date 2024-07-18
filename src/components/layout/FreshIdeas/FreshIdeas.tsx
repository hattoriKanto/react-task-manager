import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

import { RootState } from "../../../store";
import { CardComponent, SectionComponet } from "../../shared";
import { CustomCardWrapper } from ".";

export const FreshIdeas = () => {
  const tasks = useSelector((state: RootState) => state.tasksReducer.tasks);
  const newTasks = tasks.filter((task) => task.new);

  return (
    <SectionComponet>
      <Typography variant="h2">Choose fresh ideas to do</Typography>
      <CustomCardWrapper>
        {newTasks.map((task) => {
          const { id } = task;

          return (
            <CardComponent
              key={id}
              task={task}
            />
          );
        })}
      </CustomCardWrapper>
    </SectionComponet>
  );
};
