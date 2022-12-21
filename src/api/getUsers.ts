import axios from "axios";
import { usersType } from "../Screens/User/types";

export const getUsers = () => {
  return axios.get<usersType[]>("https://jsonplaceholder.typicode.com/users");
};

export const getUser = (id: string | number) => {
  return axios.get<usersType>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
};
