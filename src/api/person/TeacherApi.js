import AxiosClient from "../AxiosClient";
import CommonApi from "../CommonApi";

const baseURL = "/teacher";

const TeacherApi = {
  ...CommonApi(baseURL),

  search: (value) => {
    const url = baseURL + "/search?value=" + value;
    return AxiosClient.get(url);
  },
};

export default TeacherApi;
