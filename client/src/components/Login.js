import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import { useHistory } from 'react-router-dom'

const initialState = {
  username:'',
  password:'',
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [loginData, setLoginData ] = useState(initialState)

  const history = useHistory()

  const handleChanges = (e) => {
    setLoginData({...loginData, [e.target.name]:e.target.value})
  }
  
  const executeLogin = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post('/api/login', loginData)
        .then((res)=>{
          // console.log(res)
          localStorage.setItem('token',res.data.payload)
          history.push('/bubble-page')
        })
        .catch((error)=>{
          console.log(error)
        })

  }
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={executeLogin}>
        <label> username: </label>
        <input
          name='username'
          type='text'
          value={loginData.username}
          onChange={handleChanges}
          />

        <label> password: </label>
        <input
          name='password'
          type='password'
          value={loginData.password}
          onChange={handleChanges}
          />
          <button>Sign In</button>
      </form>
    </>
  );
};

export default Login;
