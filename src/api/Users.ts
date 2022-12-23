import axios from "axios";
import { ToDoIdType } from "../Screens/Tasks/types";
import { usersType } from "../Screens/User/types";

export const getUsers = () => {
  return axios.get<usersType[]>(
    "https://63a025327aaf11ceb8a897ef.mockapi.io/Users"
  );
};

export const getUser = (id: ToDoIdType) => {
  return axios.get<usersType[]>(
    `https://63a025327aaf11ceb8a897ef.mockapi.io/Users${id}`
  );
};
