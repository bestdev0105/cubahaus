import axios from "axios";
import jwtDecode from "jwt-decode";

export const getToken = () => {
  return localStorage.getItem("ch-userToken");
};

export const clearToken = () => {
  localStorage.clear();
};

export const checkExpirity = () => {
  const token = getToken();
  if (!token) {
    return {
      error: "not matched"
    };
  }
  try {
    const profile = jwtDecode(token);

    const expiredAt = profile.expiredAt || profile.exp * 1000;

    if (expiredAt > new Date().getTime()) {
      return {
        ...profile,
        token,
        expiredAt: new Date(expiredAt)
      };
    } else {
      return { error: "Token expired" };
    }
  } catch (e) {
    console.log(e);

    return { error: "Server Error" };
  }
};

export const setAuthTokenHeader = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getHeaders = () => {
  const userToken = localStorage.getItem("ch-userToken");
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (userToken) {
    headers["Authorization"] = "JWT " + userToken;
  }

  return headers;
};
