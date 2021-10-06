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
    <h3>Name:{item.name}</h3>
    <img src={item.img} alt="item image"></img>
    <h3>Price:{item.cost}</h3>

    <h4>description{item.description}</h4>

        </div>
    </li>
    )
//  })
}



export default Card