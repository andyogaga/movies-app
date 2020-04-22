import React from "react";
import Login from "./login";
import { useDispatch } from "react-redux";
import { sendLoginRequest } from "../../store/actions/auth.actions";
import { shape } from "prop-types";

const LoginContainer = ({history}) => {
  const dispatch = useDispatch();
  const login = (data) => {
    dispatch(sendLoginRequest(data, history))
  };

  return <Login sendLoginRequest={login} />;
};

LoginContainer.propTypes = {
  history: shape({})
}

export default LoginContainer;
