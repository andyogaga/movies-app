import React from 'react'
import Signup from './signup'
import { sendSignupRequest } from '../../store/actions/auth.actions';
import { useDispatch } from 'react-redux';
import { shape } from 'prop-types';

const SignupContainer = ({history}) => {
  const dispatch = useDispatch();
  const signup = (data) => {
    dispatch(sendSignupRequest(data, history))
  };

    return (
      <Signup sendSignupRequest={signup} />
    )
}

SignupContainer.propTypes = {
  history: shape({})
}

export default SignupContainer
