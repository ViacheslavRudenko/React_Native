import axios from "./axios";
import { ToDoIdType, ToDoType } from "../Screens/Tasks/types";
import { userIdType } from "../Screens/User/types";

export const getData = async (userId: userIdType, filter: string) => {
  const result = await axios.get<ToDoType[]>(`Users/${userId}/Task?${filter}`);
  return result;
};

export const addTask = async (userId: userIdType, task: ToDoType) => {
  const result = await axios.post(`Users/${userId}/Task`, task);
  return result;
};

export const deleteTask = async (userId: userIdType, taskId: ToDoIdType) => {
  const result = await axios.delete(`Users/${userId}/Task/${taskId}`);
  return result;
};

export const editTask = async (
  userId: userIdType,
  taskId: ToDoIdType,
  task: ToDoType
) => {
  const result = await axios.put(`Users/${userId}/Task/${taskId}`, task);
  return result;
};
