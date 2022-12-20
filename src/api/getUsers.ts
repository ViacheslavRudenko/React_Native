import axios from "axios";

export const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const getUser = (id: string | number) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
