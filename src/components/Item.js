import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <>
        <div className="card">
            <Link to={`/item/${props.id}`}>
                <img src={props.image} className="card-img-top" alt="..." />
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