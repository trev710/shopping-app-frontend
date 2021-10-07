import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


function Checkout(Component){
    return(
    <div className= "Checkout">
        <p>
        Checkout should display the total with all items in the cart    
        </p>
        <ul>
        <li>penguin</li>   
        </ul>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb9%2F07%2F64%2Fb907647a08d74a862128002b9590116e.jpg&f=1&nofb=1" />
    </div>
    )
}

export default Checkout