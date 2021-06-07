import axios from "axios";

const config = {
  baseURL: "http://192.168.15.112:8080/api",
  headers: {
    "content-type": "application/json",
  },
};

const AxiosClient = axios.create(config);

AxiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data.data;
    return response;
  },
  (error) => {
    throw error;
  }
);

export default AxiosClient;
