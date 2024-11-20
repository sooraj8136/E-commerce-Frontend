import { config } from 'dotenv'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function AddProduct() {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    useEffect(()=> {
        axios.get("http://localhost:3000/user/check-admin")
        .then((res) => {
    
        })
        .catch(err => {
            alert("Only admin can access this page")
            navigate("/")
        })
    }, [])
    const addProduct = (event) => {
        event.preventDefault()
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: token
            }
        }
        console.log(data)
        let formData = new FormData()
        formData.append('file', data.image)
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('discount', data.discount)
        axios.post("http://localhost:3000/", formData, config)
        .then(res => {
            alert(res.data.message)
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }

    const changeHandler = (event, field) => { 
        let tempData = {...data}
        tempData[field] = event.target.value
        setData(tempData)
    }

    const handleImageChange = (event) => {
        let tempData = {...data}
        tempData["image"] = event.target.files[0]
        setData(tempData)
    }

  return (
    <>
    <form onSubmit={addProduct} encType='multipart/form-data'>
        <input type="file" onChange={handleImageChange}/><br/>
        <input type="text" placeholder='title' onChange={(event)=>changeHandler(event, "title")}/><br/>
        <input type="number" placeholder='price' onChange={(event)=>changeHandler(event, "price")}/><br/>
        <input type="number" placeholder='Discount in %' onChange={(event)=>changeHandler(event, "discount")}/><br/><br />
        <input type="submit" value="Add product" />
    </form>
    </>
  )
}

export default AddProduct