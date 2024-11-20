import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({})
  const navigate = useNavigate();

  const register = (event) => {
    console.log("Register")
    event.preventDefault()
    axios.post("http://localhost:3000/user/register", userData)
    .then(res =>{
      alert("Registered successfully")
      navigate("/login");
    })
    .catch(err => {
      alert("Something went wrong. Try again!!!")
    })
  }

  const changeHandler = (event, field) => {
    let tempUserData = {...userData}
    tempUserData[field] = event.target.value
    console.log(tempUserData)
    setUserData(tempUserData)
  }
  return (
    <>
        <h1>Register</h1>
        <form onSubmit = {register}>
            <input type = "text" className='input2' placeholder = "Username" onChange = {(event)=>changeHandler(event, "username")}/>
            <input type = "email" className='input2' placeholder = "Email" onChange = {(event)=>changeHandler(event, "email")}/>
            <input type = "text" className='input2' placeholder = "Phone No" onChange = {(event)=>changeHandler(event, "phone")}/>
            <input type = "password" className='input2' placeholder = "Passsword" onChange = {(event)=>changeHandler(event, "password")}/>
            <input type = "password" className='input2' placeholder = "Confirm Password" onChange = {(event)=>changeHandler(event, "confirmPassword")}/>
            <div className='text-right mb-10'>Agree the terms and conditions <input type = "checkbox"/></div>
            <input type="submit" value="Register" className='btn2'/>
        </form>
        <p>Already have an account <Link to = "/login">Login</Link></p>
    </>
  )
}

export default Register