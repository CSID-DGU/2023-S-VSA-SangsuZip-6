import api from "./index";
import { SERVER_URL } from "@env";

export const LoginApi = async (data) => {
  try {
    const response = await api.post(`${SERVER_URL}/user/signin`, data);
    return response;
  } catch (e) {
    if (e) throw Error(e);
  }
};

export const RegisterApi = async (data) => {
  try {
    const response = await api.post(`${SERVER_URL}/user/signup`, data);
    return response;
  } catch (e) {
    if (e) throw Error(e);
  }
};

export const Test = async () => {
  const response = await api.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return response;
};
