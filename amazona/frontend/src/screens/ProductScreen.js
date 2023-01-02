import React from 'react';
// import data from '../data';
import { useParams } from 'react-router-dom';
const ProductScreen = () => {
    const params = useParams();
    const {slug} = params;
    // document.write(slug);
  return (
    <div>
        <h1>{slug}</h1>
    </div>   
  )
}

export default ProductScreen;