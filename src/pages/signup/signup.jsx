import React from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Button, Label } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { initialValuesAuth, authFormSchema } from "../../utils/constants";
import { StyledFormInput, StyledSegment } from "../../common/styles";
import { StyledSignupGridColumn, StyledSignupFooter } from "./signup.styles";

export const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};

export const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(2, "Your First name must be more than 2 characters"),
  lastName: Yup.string()
    .required("Required")
    .min(2, "Your Last name must be more than 2 characters"),
  username: Yup.string()
    .required("Required")
    .min(2, "Your Username must be more than 2 characters"),
  password: Yup.string()
    .required("Required")
    .min(4, "Your password must be more than 4 characters"),
});

const Signup = (props) => {
  const dispatch = useDispatch();
  const signup = (values, { setSubmitting }) => {
    const { sendSignupRequest } = props;
    dispatch(sendSignupRequest({ ...values, setSubmitting }));
  };
  return (
    <Grid
      verticalAlign="middle"
      columns={2}
      centered
      stretched
      style={{ height: "90%" }}
    >
      <StyledSignupGridColumn mobile="13" tablet="12" computer="8">
        <Header textAlign="center" as="h3">
          Sign up
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={signup}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => {
            return (
              <StyledSegment padded>
                <Label
                  className="ui label"
                  style={{ backgroundColor: "transparent", marginTop: "1rem" }}
                  htmlFor="firstName"
                >
                  First name
                </Label>
                <StyledFormInput
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Andy"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName ? (
                  <Label
                    basic
                    color="red"
                    data-testid="firstName-error"
                    pointing="above"
                  >
                    {errors.firstName}
                  </Label>
                ) : null}
                <Label
                  className="ui label"
                  style={{ backgroundColor: "transparent", marginTop: "1rem" }}
                  htmlFor="lastName"
                >
                  Last name
                </Label>
                <StyledFormInput
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Chukwu"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName ? (
                  <Label
                    basic
                    color="red"
                    data-testid="lastName-error"
                    pointing="above"
                  >
                    {errors.lastName}
                  </Label>
                ) : null}
                <Label
                  className="ui label"
                  style={{ backgroundColor: "transparent", marginTop: "1rem" }}
                  htmlFor="username"
                >
                  Username
                </Label>
                <StyledFormInput
                  type="text"
                  id="username"
                  name="username"
                  placeholder="andyogaga"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.username && errors.username ? (
                  <Label
                    basic
                    color="red"
                    data-testid="username-error"
                    pointing="above"
                  >
                    {errors.username}
                  </Label>
                ) : null}

                <Label
                  className="ui label"
                  style={{ backgroundColor: "transparent", marginTop: "1rem" }}
                  htmlFor="password"
                >
                  Password
                </Label>
                <StyledFormInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password ? (
                  <Label
                    basic
                    color="red"
                    data-testid="password-error"
                    pointing="above"
                  >
                    {errors.password}
                  </Label>
                ) : null}

                <Button
                  size="normal"
                  color="blue"
                  fluid={false}
                  loading={isSubmitting}
                  onClick={handleSubmit}
                  disabled={!isValid || isSubmitting}
                >
                  Register
                </Button>
              </StyledSegment>
            );
          }}
        </Formik>
        <StyledSignupFooter textAlign="center" size="small">
          <span>Already have an account? </span>
          <Button as={Link} to="/login" basic compact color="blue">
            Log in
          </Button>
        </StyledSignupFooter>
      </StyledSignupGridColumn>
    </Grid>
  );
};

export default Signup;
