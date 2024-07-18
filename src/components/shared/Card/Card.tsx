import React from "react";
import { useDispatch } from "react-redux";
import { CardContent, Typography } from "@mui/material";

import { TaskToUpdate } from "../../../types";
import {
  CardComponentType,
  CustomCard,
  CustomCardFooter,
  CustomCardHeader,
} from ".";
import { updateTask } from "../../../api/api";
import { fetchTasks } from "../../../utils/utils";

export const CardComponent: React.FC<CardComponentType> = ({ task }) => {
  const dispatch = useDispatch();
  const { id, title, category, completed } = task;

  const handleStatusChange = async () => {
    if (task.new) {
      const data: TaskToUpdate = {
        id,
        completed,
        new: !task.new,
      };
      await updateTask(data);
      return;
    }

    if (!task.new) {
      const data: TaskToUpdate = {
        id,
        completed: !completed,
        new: task.new,
      };
      await updateTask(data);
      return;
    }

    await fetchTasks(dispatch);
  };

  return (
    <CustomCard onClick={() => handleStatusChange()}>
      <CardContent>
        <CustomCardHeader>
          <Typography variant="body1">{title}</Typography>
        </CustomCardHeader>
        <CustomCardFooter>
          <Typography variant="h4">{category}</Typography>
        </CustomCardFooter>
      </CardContent>
    </CustomCard>
  );
};
