import axios from "axios";
import { ToDoType } from "../Screens/Tasks/types";

export const getData = () => {
  return axios.get<ToDoType[]>("https://jsonplaceholder.typicode.com/todos");
};
