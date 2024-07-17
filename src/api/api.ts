import axios from "axios";
import { NewTask } from "../types";

export const getAllTasks = async () => {
  try {
    const result = await axios.get("http://localhost:3000/task");

    console.log(result.data);

    return result.data;
  } catch (err) {}
};

export const createTask = async (newTask: NewTask) => {
  try {
    const result = await axios.post("http://localhost:3000/task", newTask);

    return result.data;
  } catch (error) {}
};
