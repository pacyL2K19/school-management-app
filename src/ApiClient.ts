import { AccountInfo } from "./types";
const apiUrl = "https://smbackend123.herokuapp.com/api/";

export const Login = async (email: string, password: string) => {
  try {
    const res = await fetch(apiUrl + "auth/login", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
};
