import axios from "axios";

const instance = axios.create({
  baseURL: "https://63a025327aaf11ceb8a897ef.mockapi.io",
});

export default instance;
