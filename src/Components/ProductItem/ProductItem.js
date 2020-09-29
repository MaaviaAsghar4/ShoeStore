import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../../Api/shoesApi.json';
import './ProductItem.css'

const ProductItem = () => {
    const { id } = useParams();
    const shoeItem = Shoes[id];

    if (!shoeItem) {
        return <h2>404: Product Not Found</h2>
    }

    return (
        <div className='container'>
            <img src={shoeItem.img} alt={shoeItem.name} height={400} />
            <h2 className='link'>{shoeItem.name}</h2>
            <h2 className='link'>${shoeItem.price}</h2>
            <p>{shoeItem.description}</p>
            <button onClick={()=>{alert('Item Added')}}>Add to Cart</button>
        </div>
    )
}

export default ProductItem
