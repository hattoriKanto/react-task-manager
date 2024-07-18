import axios from "axios";
import { NewTask, TaskToUpdate } from "../types";

export const getAllTasks = async () => {
  try {
    const result = await axios.get("http://localhost:3000/task");

    return result.data;
  } catch (err) {}
};

export const createTask = async (task: NewTask) => {
  try {
    const result = await axios.post("http://localhost:3000/task", task);

    return result.data;
  } catch (error) {}
};

export const updateTask = async (task: TaskToUpdate) => {
  try {
    const result = await axios.patch("http://localhost:3000/task", task);

    return result.data;
  } catch (err) {}
};
