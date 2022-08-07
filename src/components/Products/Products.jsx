import React, { useState } from 'react'
import './Products.css'
import ProductArray from '../Products.json'
import ProductItem from '../ProductItem/ProductItem'

const Products = () => {
    // const productsFilter = () => {
    //     return (
    //         <>
    //             <div className="buttons">
    //                 <button>All</button>
    //                 <button>drinks</button>
    //             </div>
    //         </>
    //     )
    // }

    const [data, setData] = useState(ProductArray)
    const [filtered, setFiltered] = useState(data)
    const filterProduct = (cat) => {
        const update = data.filter((x)=> x.category === cat);
        setFiltered(update);
    }
  return (
    <div className='products'>
        <div className="container">
            <div className="header">
                <span><h1>latest arrivals</h1></span>
            </div>
            <div className="body">
                <div className="buttons">
                    <button onClick={()=>setFiltered(data)}>All</button>
                    <button onClick={()=> filterProduct("soup")}>drinks</button>
                    <button onClick={()=> filterProduct("food")}>food</button>
                    <button onClick={()=> filterProduct("snack")}>snacks</button>
                </div>
                <div className="grid">
                    {filtered.map((item, index) => {
                        return (
                            <ProductItem key={index} image={item.img} name={item.name} category={item.category}/>
                        )
                        
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products