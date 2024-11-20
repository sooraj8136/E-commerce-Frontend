import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
  const navigate = useNavigate()
  const addToCart = () => {
    let token = localStorage.getItem("token")
    const config = {
      headers: { Authorization: token }
    };

    axios.post("http://localhost:3000/cart", { product: props.product._id, count: 1 }, config)
    .then(res => {
      alert("Product added to cart")
    }).catch((err) => {
      alert(err.response.data.message)
      if(err.response.status == 401){
        navigate("/login")
      }
    })
  }
  return (
    <>
      <div className='product-card'>
        <img src={"http://localhost:3000/"+props.product.image} />
        <div className='product-details'>
          <Link to={`/product-details/${props.product._id}`}>
            <p className='product-title'>{props.product.title}</p>
          </Link>
          <p className='product-price'>${props.product.price}</p>
          <button className='btn2' onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard