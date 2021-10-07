import PenguinCard from './PenguinCard'

function ItemList ( {items} ) {

return (
    <ul className="cards">
        {items.map((item) => {
            return (
                <PenguinCard />
            )
        })}
    </ul>
)}

export default ItemList