import React from "react";
import Login from "./login";
import { useDispatch } from "react-redux";
import { sendLoginRequest } from "../../store/actions/auth.actions";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const login = (data) => {
    dispatch(sendLoginRequest(data))
  };

  return <Login sendLoginRequest={login} />;
};

export default LoginContainer;
