import { useSelector } from "react-redux";
import { TableBody, TableRow, TableCell } from "@mui/material";

import { CustomCellContent, CustomIDCellContent } from ".";
import { RootState } from "../../../store";

export const TableContent = () => {
  const tasks = useSelector((state: RootState) => state.tasksReducer.tasks);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <TableBody>
      {completedTasks.map((item) => {
        const { id } = item;
        return (
          <TableRow key={id}>
            {Object.entries(item).map(([key, value]) => {
              if (key === "id") {
                return (
                  <TableCell
                    sx={{ width: "10%" }}
                    key={key}
                  >
                    <CustomIDCellContent>{value}</CustomIDCellContent>
                  </TableCell>
                );
              }
              return (
                <TableCell
                  sx={{ width: "30%" }}
                  key={key}
                >
                  <CustomCellContent>{value}</CustomCellContent>
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};
