import axios from "axios";
import { TOKEN } from "src/utils/Constants";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN)}`;

  return config;
});

export default axiosInstance;
