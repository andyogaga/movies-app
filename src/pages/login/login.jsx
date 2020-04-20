import React from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Button, Label } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { initialValuesAuth, authFormSchema } from "../../utils/constants";
import { StyledFormInput, StyledSegment } from "../../common/styles";
import { StyledLoginGridColumn, StyledLoginFooter } from "./login.styles";


const Login = (props) => {
  const dispatch = useDispatch();
  const login = (values, { setSubmitting }) => {
    const {sendLoginRequest} = props;
    dispatch(sendLoginRequest({ ...values, setSubmitting }));
  };
  return (
    <Grid verticalAlign="middle" columns={2} centered stretched>
      <StyledLoginGridColumn mobile="16" tablet="12" computer="8">
        <Header textAlign="center" as="h3">
          Login
        </Header>
        <Formik
          initialValues={initialValuesAuth}
          validationSchema={authFormSchema}
          onSubmit={login}
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
                    style={{ backgroundColor: "transparent", marginTop: '1rem' }}
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
                    style={{ backgroundColor: "transparent", marginTop: '1rem'  }}
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
                    {errors.username}
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
                  Log In
                </Button>
              </StyledSegment>
            );
          }}
        </Formik>
        <StyledLoginFooter textAlign="center" size="small">
          <span>Don&apos;t have an account yet? </span>
          <Button as={Link} to="/signup" basic compact color="blue">
            Sign Up
          </Button>
        </StyledLoginFooter>
      </StyledLoginGridColumn>
    </Grid>
  );
};

export default Login;
