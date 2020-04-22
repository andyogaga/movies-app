import { callApi } from "../../utils";
import { LOGIN } from "./action.types";
import { toast } from "react-toastify";

export const sendLoginRequest = (
  { username, password, setSubmitting },
  history
) => async (dispatch) => {
  try {
    const res = await callApi("/user/login", { username, password }, "POST");
    if (res) {
      dispatch({
        type: LOGIN,
        user: res,
      });
      history.push("/");
    }
  } catch (error) {
    toast(
      error && error.response && error.response.data && error.response.data
        ? error.response.data
        : "Error in connection"
    );
  } finally {
    setSubmitting(false);
  }
};

export const sendSignupRequest = (data, history) => async (dispatch) => {
  const { firstName, lastName, username, password, setSubmitting } = data;
  callApi(
    "/user/create",
    { firstName, lastName, username: username.toLowerCase(), password },
    "POST"
  )
    .then(() => {
      dispatch(
        sendLoginRequest({ username, password, setSubmitting }, history)
      );
    })
    .catch((error) => {
      toast(
        error && error.response && error.response.data && error.response.data
          ? error.response.data
          : "Error in connection"
      );
      setSubmitting(false);
    });
};
