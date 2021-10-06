import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import { connect } from 'react-redux'
import "./component.css"


function Cart(item){
    return (
        <div className="cart-image">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe5%2F42%2Fcf%2Fe542cf73a2bda32b79b11db88f1f7137.jpg&f=1&nofb=1" />

        </div>    
)}




export default Cart;