import axios from "axios";
import { useStore } from "store/store";
import users from "users.json";

export const api = axios.create({
  baseURL: "https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
  timeout: 3000,
});

export const getAllDragons = () => {
  return api.get("/");
};

export const getSingleDragon = (id) => {
  return api.get(`/${id}`);
};

export const deleteSingleDragon = (id) => {
  return api.delete(`/${id}`);
};

export const editSingleDragon = (id, data) => {
  return api.put(`/${id}`, data);
};

export const createSingleDragon = (data) => {
  return api.post(`/`, data);
};

//error handling
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status >= 500) {
      useStore
        .getState()
        .setToastMessage(
          "Unable to connect to the Dragon Catalog. Please try again later"
        );
    }
    return { error: error?.response?.status || true };
  }
);

//mock token validation to prevent user from tampering with the token in localstorage
api.interceptors.request.use(async (config) => {
  const token = useStore.getState().token;
  const logout = useStore.getState().logout;
  const verified = Boolean(users.find((user) => user.token === token));
  if (!verified) {
    logout();
    return;
  }
  return config;
});
