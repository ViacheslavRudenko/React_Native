import axios from "axios";
import { ToDoType } from "../Screens/Home/ToDo";

export const getData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};
