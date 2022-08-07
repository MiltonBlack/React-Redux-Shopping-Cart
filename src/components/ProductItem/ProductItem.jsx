import React from 'react'
import './ProductItem.css'

function ProductItem({image, name, category}) {
    return (
        <div className='product-item'>
            <div className="card">
                <img src={image} alt="" />
                <p>{name}</p>
                <span>{category}</span>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItem