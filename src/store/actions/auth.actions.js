import { callApi } from "../../utils";
import { LOGIN } from "./action.types";
import { showFeedback } from "./feedbackActions";

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

export const sendSignupRequest = (data, history) => async (dispatch) => {
  const { firstName, lastName, username, password, setSubmitting } = data;
  callApi(
    "/user/create",
    { firstName, lastName, username: username.toLowerCase(), password },
    "POST"
  )
    .then(() => {
      dispatch(sendLoginRequest({ username, password, setSubmitting }, history));
    })
    .catch((error) => {
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
    });
};
