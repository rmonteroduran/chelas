import { Link } from "react-router-dom";

const Item = (props) => {

    if (props.stock === 0) {
        return (
            <>
            <div className="card">
                <img src={props.image} className="card-img-top sin-stock" alt="..."/>
                <h5 className="card-sinstock">Sin stock</h5>
                <div className="card-body">
                    <p className="card-title">{props.name}</p>
                    <p className="card-text"><small className="text-muted">{props.format}</small></p>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
        <div className="card">
            <Link to={`/item/${props.id}`}>
                <img src={props.image} className="card-img-top" alt="..." />
                <h5 className="card-stock">{props.stock}u</h5>
                <h5 className="card-price">${props.price}</h5>
                <i className="fa fa-search"></i>
            </Link>
                <div className="card-body">
                    <p className="card-title">{props.name}</p>
                    <p className="card-text"><small className="text-muted">{props.format}</small></p>
                </div>
        </div>
        </>
    )
};

export default Item;