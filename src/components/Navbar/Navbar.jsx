import React from 'react'
import './Navbar.css'
import { FaUserPlus, FaShoppingCart, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="container">
                <div className="logo-wrapper">
                    <h1 className='logo'>ReduxExample</h1>
                </div>
                <div className="links">
                    <div className="link">
                        <a to='/'>Home</a>
                    </div>
                    <div className="link">
                        <a to='/'>about</a>
                    </div>
                    <div className="link">
                        <a to='/'>products</a>
                    </div>
                    <div className="link">
                        <a to='/'>contact</a>
                    </div>
                </div>
                <div className="right">
                    <div className="widgets">
                        <div className="login">
                            <a href="#" className="btn"><FaSignInAlt style={{marginRight:'3px'}}/>login</a>
                        </div>
                        <div className="login">
                            <a href="#" className="btn"><FaUserPlus style={{marginRight:'3px'}}/>Register</a>
                        </div>
                        <div className="login">
                            <a href="#" className="btn"><FaShoppingCart style={{marginRight:'3px'}}/>Cart <span>0</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar