import ItemCount from "./ItemCount";

const Item = (props) => {
    return (
        <>
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-title">{props.name}</p>
                <h5 className="card-text">${props.price}</h5>
                <p className="card-text"><small class="text-muted">{props.description}</small></p>
                <ItemCount stock={props.stock} initial={1} />
            </div>
        </div>
        </>
    )
};

export default Item;