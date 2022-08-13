import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './Product.css'

const Product = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
   
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:4000/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct();
    },[])

    const Loading = () => {
        return(
            <>
                Loading...
            </>
        )
    }
   
    const ShowProduct = ()=> {
        return (
            <>
                
            </>
        )
    }
  return (
    <div className='product'>
        <div className="container">
            <div className='image'>     
                {/* {loading ? <Loading/> : <ShowProduct/>} */}
                <img src={product.img} alt="" height="500px" width="100%" />
            </div>
            <div className="content">
                <h3>{product.name}</h3>
                <p>This is a description of what you ordered, you may proceed to checkout your food items</p>
                <div className="extras">
                    <div className="extra">small</div>
                    <div className="extra">medium</div>
                    <div className="extra">large</div>
                </div>
                <div className="button">
                    <button>Add to Cart</button>
                    <NavLink to='/cart' className='cart'>Go to Cart</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product