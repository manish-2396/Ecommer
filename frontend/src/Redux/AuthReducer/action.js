import * as types from "./actionType";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

let baseURL = "http://localhost:8080";

export const signup = (payload) => (dispatch) => {
  // console.log("payload", payload)
  dispatch({ type: types.SIGNING_REQUEST });
  fetch(`${baseURL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILED });
    });
};

export const signin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  console.log("login", payload);

  fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
        if(!res.isAuth){
            swal("Something went wrong. Please try again later");
        }
      dispatch({ type: types.LOGIN_SUCCESS, payload: res });
      <Navigate to="/" replace={true} />;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILED });
      swal("Something went wrong. Please try again later");
    });
};

const isAuth = {
  isAuth: false,
};

export const signout = () => (dispatch) => {
  dispatch({ type: types.LOGIN_FAILED, payload: isAuth });
};

export const mailcheck = (payload) => (dispatch) => {
  dispatch({ type: types.EMAILCHECK_REQUEST });

  fetch(`${baseURL}/newaccount`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      dispatch({ type: types.EMAILCHECK_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: types.EMAILCHECK_FAILED });
    });
};

export const otpcheck = (payload) => (dispatch) => {
  dispatch({ type: types.OTP_REQUEST });

  fetch(`${baseURL}/checkotp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log( "res ", res);
      dispatch({ type: types.OTP_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: types.OTP_FAILED });
    });
};

export const forgetemail = (payload) => (dispatch) => {
  dispatch({ type: types.FORGETEMAIL_REQUEST });

  fetch(`${baseURL}/passwordrest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      dispatch({ type: types.FORGETEMAIL_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: types.FORGETEMAIL_FAILED });
    });
};

export const forgetotp = (payload) => (dispatch) => {
  dispatch({ type: types.FORGETOTP_REQUEST });
  // console.log(payload)

  fetch(`${baseURL}/changePassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      dispatch({ type: types.FORGETOTP_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: types.FORGETOTP_FAILED });
    });
};
