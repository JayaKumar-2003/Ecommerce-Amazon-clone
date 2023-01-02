import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import './HomeScreen.css'
const HomeScreen = () => {
  const [products,SetProducts] = useState([]);
  useEffect(()=>{
    const fetchData =async () => {
      const result = await axios.get()
    }
  },[]);
  return (
    <div>
         <h1>
          Featured products
        </h1>
       <div className='products'>
       {
          data.products.map((products)=>(
             <div className='product' key={products.slug}>
              <Link to={`/products/${products.slug}`}>
              <img src={products.images} alt={products.name} />
              </Link>
               <div className='product-info'>
                <Link to={`/products/${products.slug}`}>
                <p>{products.name}</p>
                </Link>
                <p>{products.price}</p>
                <button> Add to cart</button>
                </div>
             </div>
          ))    
        }
       </div>
    </div>
  )
}

export default HomeScreen