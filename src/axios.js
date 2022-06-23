import axios from "axios";
import {errorToast} from "./utils/toast";

const Axios = axios.create({
  baseURL: "http://dataservice.accuweather.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

Axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    errorToast("Something went wrong,please try again later...");
    return Promise.reject(error);
  }
);

export default Axios;
