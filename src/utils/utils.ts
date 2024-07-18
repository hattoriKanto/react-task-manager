import { Dispatch } from "@reduxjs/toolkit";

import { setTasks } from "../store";
import { getAllTasks } from "../api/api";

export const fetchTasks = async (dispatch: Dispatch) => {
  const fetchedTasks = await getAllTasks();
  dispatch(setTasks(fetchedTasks));
};
