import axios from "axios";

export const getData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};
