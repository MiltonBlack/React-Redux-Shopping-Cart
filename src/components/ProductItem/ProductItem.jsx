import React from 'react'
import './ProductItem.css'
import {NavLink} from 'react-router-dom'

function ProductItem({image, name, category, id }) {
    return (
        <div className='product-item'>
            <div className="card">
                <img src={image} alt="" />
                <p>{name}</p>
                <span>{category}</span>
                <button><NavLink to={`/products/${id}`}>Add to Cart</NavLink></button>
            </div>
        </div>
    )
}

export default ProductItem