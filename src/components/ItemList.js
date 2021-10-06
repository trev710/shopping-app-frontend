import Card from './Card'

function ItemList ( {items} ) {

return (
    <ul className="cards">
        {items.map((item) => {
            return (
                <Card />
            )
        })}
    </ul>


)}

export default ItemList