import { callApi } from "../../utils";
import { LOGIN } from "./action.types";
import { showFeedback } from "./feedbackActions";

export const sendLoginRequest = ({
  username,
  password,
  setSubmitting,
}) => async (dispatch) => {
  try {
    const res = await callApi("/user/login", { username, password }, "POST");
    if (res) {
      const { token, data } = res;
      dispatch({
        type: LOGIN,
        user: data,
        token,
      });
    }
  } catch (error) {
    dispatch(
      showFeedback(
        error &&
          error.response &&
          error.response.data &&
          error.response.data.message
          ? error.response.data.message
          : "Error in connection"
      )
    );
  } finally {
    setSubmitting(false);
  }
};

export const sendSignupRequest = (data) => async (dispatch) => {
  const { username, password, setSubmitting } = data;
  try {
    const res = await callApi(
      "/user/create",
      { username: username.toLowerCase(), password },
      "POST"
    );
    if (res) {
      const { token, data } = res;
      dispatch({
        type: LOGIN,
        user: data,
        token,
      });
    }
  } catch (error) {
    dispatch(
      showFeedback(
        error &&
          error.response &&
          error.response.data &&
          error.response.data.message
          ? error.response.data.message
          : "Error in connection"
      )
    );
  } finally {
    setSubmitting(false);
  }
};
