import React from 'react'
import { Link } from 'react-router-dom'

function Orders() {
    return (
        <>
            <h1>Order list</h1>
            <ul className='cart-list'>
                <li className='cart-item'>
                    <img src='https://store.rsgsolutions.co.in/wp-content/uploads/2023/09/15-pro-pro-max.jpg' width={"100px"} />
                    <p className='product-title'>Product 1</p>
                    <p className='product-price'>$1500</p>
                    <span className='cart-item-quantity'>3</span>
                    <p className='product-price'>$4500</p>
                </li>
                <li className='cart-item'>
                    <img src='https://store.rsgsolutions.co.in/wp-content/uploads/2023/09/15-pro-pro-max.jpg' width={"100px"} />
                    <p className='product-title'>Product 1</p>
                    <p className='product-price'>$1500</p>
                    <span className='cart-item-quantity'>3</span>
                    <p className='product-price'>$4500</p>
                </li>
                <li className='cart-item'>
                    <img src='https://store.rsgsolutions.co.in/wp-content/uploads/2023/09/15-pro-pro-max.jpg' width={"100px"} />
                    <p className='product-title'>Product 1</p>
                    <p className='product-price'>$1500</p>
                    <span className='cart-item-quantity'>3</span>
                    <p className='product-price'>$4500</p>
                </li>
            </ul>
        </>
    )
}

export default Orders