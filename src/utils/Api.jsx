import axios from "axios";
// "https://thinpandam-be.onrender.com/"
const API_URL = "https://thinpandam-be.onrender.com/";

const AxiosService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosService.interceptors.request.use(
  (config) => {
    // console.log(config)
    const token = sessionStorage.getItem("token");
    if (config.authenticate && token)
      config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosService;
