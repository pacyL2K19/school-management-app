import { AccountInfo } from "./types";
const apiUrl = "https://smbackend123.herokuapp.com/api/";
import jwtDecode from "jwt-decode";

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

// Schools

export const getSchools = async () => {
  try {
    const res = await fetch(apiUrl + "school/schools", {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
};

export const getSchool = async (idSchool: string, idStaff: string) => {
  try {
    const res = await fetch(apiUrl + "school/" + idSchool + "/" + idStaff, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const resJson = await res.json();
    return resJson;
  } catch (error) {}
};

// Classes

export const getClasses = async (idStaff: string) => {
  try {
    const res = await fetch(apiUrl + "class/classes/" + idStaff, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
};

// courses

export const getCourses = async (idStaff: string) => {
  try {
    const res = await fetch(apiUrl + "course/courses/" + idStaff, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
};

// student ---- search

// http://localhost:8080/api/student/search/:keyword/:idStaff

export const search = async (idStaff: string, keyword: string) => {
  try {
    const res = await fetch(
      apiUrl + "student/search/" + "/" + keyword + idStaff,
      {
        mode: "cors",
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    );
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
};

export const isUserConnected = (user: any): boolean => {
  let today = Date.now();
  let expire = jwtDecode(JSON.parse(user).token).exp * 1000;
  if (expire - today > 0) {
    return true;
  } else {
    return false;
  }
};
