import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.REACT_APP_API || "https://63a025327aaf11ceb8a897ef.mockapi.io",
});
console.log(process.env.DA);

export default instance;
