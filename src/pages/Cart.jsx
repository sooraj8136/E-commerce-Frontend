import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

function Cart() {

    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([])

    const getCartData = () => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: token
            }, 
            withCredentials: true
        }
        axios.get("http://localhost:3000/cart/", config)
        .then(res => {
            setCartItems(res.data.cartItems)
            console.log(res.data.cartItems)
        })
        .catch(err => {
            const token = localStorage.getItem("refresh")
            const config = {
                headers: {
                    Authorization: token
                }
            }
            axios.get("http://localhost:3000/user/get-access-token", config)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                const config = {
                    headers: {
                        Authorization: res.data.token
                    }
                }
                axios.get("http://localhost:3000/cart/", config)
                .then(res => {
                    setCartItems(res.data.cartItems)
                    console.log(res.data.cartItems)
                })
            })
            .catch(() => {
                navigate("/login")
            })
            console.log(err.response)
        })
    }

    useEffect(() => {
        getCartData()
    }, [])

    const updateCartCount = (id, count, index) => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: token
            }
        }
        const data = {
            count: count,
            cartItemId: id
        }
        axios.post("http://localhost:3000/cart/update-count", data, config)
            .then(res => {
                getCartData()
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    return (
        <>
            <h1>Cart list</h1>
            <ul className='cart-list'>
                {cartItems.map((cartItem, index) => (
                    <li className='cart-item' key={index}>
                        <img src='https://store.rsgsolutions.co.in/wp-content/uploads/2023/09/15-pro-pro-max.jpg' width={"100px"} />
                        <p className='product-title'>{cartItem.product.title}</p>
                        <p className='product-price'>${cartItem.product.price}</p>
                        <div>
                            <button onClick={() => updateCartCount(cartItem._id, cartItem.count - 1, index)}>-</button>
                            <span className='cart-item-quantity'>{cartItem.count}</span>
                            <button onClick={() => updateCartCount(cartItem._id, cartItem.count + 1, index)}>+</button>
                        </div>
                        <p className='product-price'>${cartItem.product.price * cartItem.count}</p>
                    </li>
                ))}
            </ul>
            <p className='text-right'>Total price: $1500</p>
            <Link to='/checkout' className='btn2'>Checkout</Link>
        </>
    )
}

export default Cart