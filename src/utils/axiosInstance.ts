import axios from "axios";
import { TOKEN, USER_ID } from "src/utils/Constants";

type TErrors = {
  response: {
    status: number;
  };
};

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN)}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: TErrors) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(USER_ID);

      window.location.reload();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
