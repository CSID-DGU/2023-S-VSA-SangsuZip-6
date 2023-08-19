import api from "./index";

export const LoginApi = async (data) => {
  try {
    const response = await api.post(
      `${process.env.SERVER_URL}/user/signin`,
      data
    );
    return response;
  } catch (e) {
    if (e) throw Error(e);
  }
};

export const RegisterApi = async (data) => {
  try {
    const response = await api.post(
      `${process.env.SERVER_URL}/user/signup`,
      data
    );
    return response;
  } catch (e) {
    if (e) throw Error(e);
  }
};
