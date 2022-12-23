import axios from "axios";
import { ToDoType } from "../Screens/Tasks/types";

export const getData = () => {
  return axios.get<ToDoType[]>(
    "https://63a025327aaf11ceb8a897ef.mockapi.io/Task"
  );
};
