import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductArray from '../Products.json'

const Product = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(ProductArray)
    useEffect(() => {
        const getProduct = () => {
            setLoading(true);
            data.map(p => {
                if (p.id === id) 
                return id;
                setLoading(false);
                setProduct(id)
            })
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
  return (
    <div>
        <div className="container">
            <div>
                {loading ? <Loading/> : 
                <div>
                    
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Product