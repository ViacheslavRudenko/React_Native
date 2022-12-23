import axios from "axios";
import { ToDoIdType, ToDoType } from "../Screens/Tasks/types";
import { userIdType } from "../Screens/User/types";

export const getData = (userId: userIdType, filter: string) => {
  return axios.get<ToDoType[]>(
    `https://63a025327aaf11ceb8a897ef.mockapi.io/Users/${userId}/Task?${filter}`
  );
};
export const addTask = (userId: userIdType, task: ToDoType) => {
  return axios.post(
    `https://63a025327aaf11ceb8a897ef.mockapi.io/Users/${userId}/Task`,
    task
  );
};

export const deleteTask = (userId: userIdType, taskId: ToDoIdType) => {
  return axios.delete(
    `https://63a025327aaf11ceb8a897ef.mockapi.io/Users/${userId}/Task/${taskId}`
  );
};

export const editTask = (
  userId: userIdType,
  taskId: ToDoIdType,
  task: ToDoType
) => {
  return axios.put(
    `https://63a025327aaf11ceb8a897ef.mockapi.io/Users/${userId}/Task/${taskId}`,
    task
  );
};
