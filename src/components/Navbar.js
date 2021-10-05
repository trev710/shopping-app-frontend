import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Totally Legit Penguin Store</Link>
                    
                    <ul className="right">
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