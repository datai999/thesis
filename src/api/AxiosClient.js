import axios from "axios";

const config = {
  baseURL: "http://localhost:8080/api",
  headers: {
    "content-type": "application/json",
  },
};

const AxiosClient = axios.create(config);

AxiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  }
);

export default AxiosClient;
