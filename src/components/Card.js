import item from "./Items"

import React, { useState } from "react"


function Card(){
// const [addCart, setAddCart] = useState(true)
// const { name, img, cost, description } = item

// function AddHandleClick() {
        //  setAddCart((addCart) => !addCart);
    //   }


    return (
        <div className="card-container">
    <h3>Name:{item.name}</h3>
    <img src={item.img} alt="item image"></img>
    <h4>Price:{item.cost}</h4>
    <button type="button" className="btn-primary" onClick={console.log("hi")}>
        Add to Cart
</button>
    <h5>Description:{item.description}</h5>

        </div>
    
    
    )};



export default Card