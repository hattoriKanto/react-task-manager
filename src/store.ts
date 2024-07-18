import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Task } from "./types";

export type RootState = ReturnType<typeof store.getState>;
interface TasksAction {
  type: string;
  payload: Task[];
}

const formSlice = createSlice({
  name: "form_context",
  initialState: {
    isActive: false,
  },
  reducers: {
    setIsActive(state) {
      state.isActive = !state.isActive;
    },
  },
});

const tasksSlice = createSlice({
  name: "task_context",
  initialState: {
    tasks: [] as Task[],
  },
  reducers: {
    setTasks(state, action: TasksAction) {
      state.tasks = action.payload;
    },
  },
});

export const { setIsActive } = formSlice.actions;
export const { setTasks } = tasksSlice.actions;

export const store = configureStore({
  reducer: {
    formReducer: formSlice.reducer,
    tasksReducer: tasksSlice.reducer,
  },
});
