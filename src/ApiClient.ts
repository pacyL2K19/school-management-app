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

export const search = async (idStaff: string | undefined, keyword: string) => {
  try {
    const res = await fetch(
      apiUrl + "student/search/" + keyword + "/" + idStaff,
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

// student --- markStudent
// result/:idStaff/:idStudent/:idPeriodCourse

export const markStudent = async (
  idStaff: string,
  idStudent: string,
  idPeriodCourse: string,
  mark: number
) => {
  try {
    const res = await fetch(
      apiUrl + "result/" + idStaff + "/" + idStudent + "/" + idPeriodCourse,
      {
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          mark,
        }),
      }
    );
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return null;
  }
};

// Periods
// -- Get period per course

export const getPeriodCourse = async (
  idStaff: string,
  academic: string,
  idCourse: string,
  idPeriod: string
) => {
  try {
    const res = await fetch(
      apiUrl +
        "period/" +
        academic +
        "/" +
        idCourse +
        "/" +
        idPeriod +
        "/" +
        idStaff,
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

// -- Get general periods

export const getPeriods = async (idStaff: string) => {
  try {
    const res = await fetch(apiUrl + "period/periods/" + "/" + idStaff, {
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

// Remark stores

export const getRemarkStore = async (idStaff: string) => {
  try {
    const res = await fetch(apiUrl + "remark/remarks/" + idStaff, {
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

// Add remark to student

export const addRemark = async (
  idStaff: string,
  idStudent: string,
  idRemarkStore: string
) => {
  try {
    const res = await fetch(
      apiUrl + "remark/" + idStaff + "/" + idStudent + "/" + idRemarkStore,
      {
        mode: "cors",
        method: "POST",
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
  console.log(user);
  
  let today = Date.now();
  let expire = jwtDecode(JSON.parse(user).token).exp * 1000;
  if (expire - today > 0) {
    return true;
  } else {
    return false;
  }
};
