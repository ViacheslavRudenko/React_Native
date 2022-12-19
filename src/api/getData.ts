import axios from "axios";
import { ToDoType } from "../Components/ToDo/ToDo";

export const getData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};
