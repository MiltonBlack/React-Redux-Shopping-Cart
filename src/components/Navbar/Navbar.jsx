import React from 'react'
import './Navbar.css'
import { FaUserPlus, FaShoppingCart, FaSignInAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

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
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className="link">
                        <NavLink to='/about'>about</NavLink>
                    </div>
                    <div className="link">
                        <NavLink to='/products'>products</NavLink>
                    </div>
                    <div className="link">
                        <NavLink to='/contact'>contact</NavLink>
                    </div>
                </div>
                <div className="right">
                    <div className="widgets">
                        <div className="login">
                            <NavLink to="/login" className="btn"><FaSignInAlt style={{marginRight:'3px'}}/>login</NavLink>
                        </div>
                        <div className="login">
                            <NavLink to="/register" className="btn"><FaUserPlus style={{marginRight:'3px'}}/>Register</NavLink>
                        </div>
                        <div className="login">
                            <NavLink to="/cart" className="btn"><FaShoppingCart style={{marginRight:'3px'}}/>Cart <span>0</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar