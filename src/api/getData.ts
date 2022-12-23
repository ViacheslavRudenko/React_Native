import axios from "axios";
import { ToDoIdType, ToDoType } from "../Screens/Tasks/types";

export const getData = () => {
  return axios.get<ToDoType[]>(
    "https://63a025327aaf11ceb8a897ef.mockapi.io/Task"
  );
};
export const addTask = (task: ToDoType) => {
  return axios.post("https://63a025327aaf11ceb8a897ef.mockapi.io/Task", task);
};

export const deleteTask = (id: ToDoIdType) => {
  return axios.delete(`https://63a025327aaf11ceb8a897ef.mockapi.io/Task/${id}`);
};
