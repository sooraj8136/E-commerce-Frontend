import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'


function ProductList() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000")
            .then(res => {
                setProducts(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <>
            <form className='text-right'>
                <input type='text' placeholder='search' className='input1' />
                <input type='submit' value='submit' className='btn1' />
            </form>
            <h1>ProductList</h1>
            <div className='product-list'>
                {products.map((product, index) => {
                    return (
                        <ProductCard product = {product} key = {index}/>
                    )
                })}
            </div>
            <div className='text-center'>
                <button className='loadmore-btn'>Load More</button>
            </div>
        </>
    )
}

export default ProductList