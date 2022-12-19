import axios from "axios";
import { ToDoType } from "../ToDo/ToDo";

export const getData = () => {
  return axios.get("https://63a025327aaf11ceb8a897ef.mockapi.io/Task");
};
