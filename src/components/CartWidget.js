import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link className="carro" to='/cart'>
            <div>
                <p>4</p>
            </div>
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </Link>
    )
};

export default CartWidget;