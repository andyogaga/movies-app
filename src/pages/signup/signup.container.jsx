import React from 'react'
import Signup from './signup'

const SignupContainer = props => {

  const {sendSignupRequest} = props;

    return (
      <Signup sendSignupRequest={sendSignupRequest} />
    )
}

export default SignupContainer
