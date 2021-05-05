import AxiosClient from "../AxiosClient";
import CommonApi from "../CommonApi";

const baseURL = "/student";

const StudentApi = {
  ...CommonApi(baseURL),

  search: (value) => {
    const url = baseURL + "/search?value=" + value;
    return AxiosClient.get(url);
  },
};

export default StudentApi;
