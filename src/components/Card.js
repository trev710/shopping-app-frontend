import Items from "./Items"


//    for (let i=0;i<Items.length;i++)
    // let item = Items[i]

function Card(){
 
    return (

        <div className="card-container">
    <h3>item.name</h3>
    <img src="item.img" alt="item image"></img>
    <h3>item.cost</h3>

    <h4>item.description</h4>

        </div>

    )
}



export default Card