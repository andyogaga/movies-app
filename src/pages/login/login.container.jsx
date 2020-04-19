import React from 'react'
import Login from './login'

const LoginContainer = props => {

  const {sendLoginRequest} = props;

    return (
      <Login sendLoginRequest={sendLoginRequest} />
    )
}

export default LoginContainer
