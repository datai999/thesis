import AxiosClient from "../AxiosClient";

const baseURL = "/teacher";

const TeacherApi = {
  getAll: () => {
    const url = baseURL;
    return AxiosClient.get(url);
  },

  search: (value) => {
    const url = baseURL + "/search?value=" + value;
    return AxiosClient.get(url);
  },

  create: (data) => {
    const url = baseURL;
    return AxiosClient.post(url, data);
  },
};

export default TeacherApi;
