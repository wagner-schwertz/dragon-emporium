import axios from "axios";

export const authApi = axios.create({ baseURL: "/api", timeout: 1500 });

export const authenticate = (data) => authApi.post("/authenticate", data);

authApi.interceptors.response.use(
  (res) => res,
  (error) => {
    return { error: error?.response?.status || true };
  }
);
