import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
            <img src="/assets/chicken.jpeg" alt="" width='100%' height='500px'/>
        </div>
        <div className="content">
            <div className="header">
                <h3>GET THE BEST DEALS AND OFFER</h3>
            </div>
            <div className="body">
                <p>Get Discount sales on all our products on arrival</p>
            </div>
        </div>
    </div>
  )
}

export default Home