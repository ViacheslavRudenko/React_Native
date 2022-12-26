import axios from "./axios";
import { ToDoIdType } from "../Screens/Tasks/types";
import { usersType } from "../Screens/User/types";

export const getUsers = async () => {
  const result = await axios.get<usersType[]>("Users");
  return result;
};

export const getUser = async (id: ToDoIdType) => {
  const result = await axios.get<usersType[]>(`Users${id}`);
  return result;
};
