import item from "./Items"
import React from "react"

//    for (let i=0;i<Items.length;i++)
    // let item = Items[i]

function Card(item){
//  let itemList = this.props.items.map(item=>{
    const { name, img, cost, description } = item


    return (
        <li className="penguin-card">
        <div className="card-container">
    <h3>Name:{name}</h3>
    <img src={img} alt="item image"></img>
    <h4>Price:{cost}</h4>
    <button type="button" className="btn-primary" onClick={console.log("hi")}>
        Add to Cart
</button>
    <h5>Description:{description}</h5>

        </div>
    </li>
    )
//  })
}



export default Card