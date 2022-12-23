import axios from "axios";
import { ToDoIdType, ToDoType } from "../Screens/Tasks/types";

export const getData = (userId: number | string, filter: string) => {
  return axios.get<ToDoType[]>(
    `https://63a025327aaf11ceb8a897ef.mockapi.io/Users/${userId}/Task?${filter}`
  );
};
export const addTask = (userId: number | string, task: ToDoType) => {
  return axios.post(
    `https://63a025327aaf11ceb8a897ef.mockapi.io/Users/${userId}/Task`,
    task
  );
};

export const deleteTask = (userId: number | string, taskId: ToDoIdType) => {
  return axios.delete(
    `https://63a025327aaf11ceb8a897ef.mockapi.io/Users/${userId}/Task/${taskId}`
  );
};
