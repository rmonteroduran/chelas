import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  return (
    <>
    <div className="detail">
      <div>
        <img src={props.item.image} alt="..." />
      </div>
      <div className="card">
            <h4>{props.item.name}</h4>
            <p><small>{props.item.description}</small></p>
            <p><small>{props.item.format}</small></p>
            <h5>${props.item.price}</h5>
            <ItemCount stock={props.item.stock} initial={1} />
      </div>
    </div>
    </>
  )
}

export default ItemDetail;