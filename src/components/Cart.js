import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import { connect } from 'react-redux'

function Cart(component){
    return (
        <div className="cart">
            <p>We need a list to hold the items added from the homepage</p>
            <p>
                We need the option to delete items from the checkout
            </p>
             <p>we need a total from the cost key to be displayed, and accumlative
            </p>
            <p>
                We need a button that uses the same route as the checkout link
            </p>

        </div>
    )

}




export default Cart;