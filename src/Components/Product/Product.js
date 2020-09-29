import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from '../../Api/shoesApi.json';
import './Product.css'

const Product = () => {
    return (
        <div className='product-container'>
            {Object.keys(Shoes).map((shoeList)=>{
                const shoeItem = Shoes[shoeList];
                return (
                    <Link className='product-list' key={shoeList} to={`${shoeList}`}>
                        <img src={shoeItem.img} alt={shoeItem.name} height={200} />
                        <h2 className='link'>{shoeItem.name}</h2>
                        <h2 className='link'>${shoeItem.price}</h2>
                        <button onClick={()=>{alert('Item Added')}}>Add to Cart</button>
                    </Link>
                )
            })}
        </div>
    )
}

export default Product;