import axios from "axios";
import { usersType } from "../Screens/User/types";

export const getUsers = () => {
  return axios.get<usersType[]>(
    "https://63a025327aaf11ceb8a897ef.mockapi.io/Users"
  );
};
