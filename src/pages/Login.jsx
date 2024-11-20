import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({})

  const loginFormSubmitHandler = (event) => {
    event.preventDefault()
    console.log(data)
    axios.post("http://localhost:3000/user/login", data)
    .then(res => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("refresh", res.data.refresh)
      navigate("/")
    })
    .catch(err => {
      alert(err.response.data.message)
    })
  }

  const formChangeHandler = (event, field) => {
    let tempData = {...data}
    tempData[field] = event.target.value
    setData(tempData)
  }

  return (
    <>
        <h1>Login</h1>
        <form onSubmit = {loginFormSubmitHandler}>
            <input type = "email" className='input2' placeholder = "Email" onChange = {(event)=>formChangeHandler(event, "email")}/>
            <input type = "password" className='input2' placeholder = "Passsword" onChange = {(event)=>formChangeHandler(event, "password")}/>
            <input type="submit" value="Login" className='btn2'/>
        </form>
        <p>Create an account <Link to = "/register">Register</Link></p>
    </>
  )
}

export default Login