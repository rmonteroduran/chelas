import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from './context/CartContext';

const CartWidget = () => {
    const cart = useContext(CartContext);

    const calcItemsQty = () => {
        let qtys = cart.cartList.map(item => item.qty)
        if (qtys.length>0) {
            qtys = qtys.reduce((previousValue, currentValue) => previousValue + currentValue)
        }
        return qtys
    }

    return (
        <Link className="carro" to='/cart'>
            <div>
            <p>{calcItemsQty()}</p>
            </div>
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </Link>
    )
};

export default CartWidget;