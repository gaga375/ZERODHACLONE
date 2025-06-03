
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // Send cookies with every request
});

export default axiosInstance;
