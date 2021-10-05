import React from 'react';
import { Link } from 'react-router-dom'
import './component.css'


 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="nav-container">
                    <Link to="/" className="navbar-logo">Totally Legit Penguin Store</Link>
                    
                    <ul className="navlist">
                        <li><Link to="/">Shop Penguins/Supplies</Link></li>
                        <li><Link to="/cart">My Cart</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;
/* resources: 
https://www.ojblabs.com/all-you-need-to-know-about-react-router-dom-link/*/