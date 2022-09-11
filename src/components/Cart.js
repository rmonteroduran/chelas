import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useContext(CartContext);

    return (
        <div className='carrito'>
        {cart.cartList.map(item => 
            <div key={item.id} className="item-carrito">
                <img src={item.image} className="card-img-top-carrito" alt="..." />
                <div>{item.name}</div>
                <div>Cantidad: {item.qty}</div>
                <div>Total ${item.price * item.qty}</div>
                <button className='btn btn-warning' onClick={() => cart.removeItem(item.id)}>Eliminar</button>
            </div>
            )}
            <div className='buttons-carrito'>
                <button className='btn btn-warning' onClick={cart.removeAll}>Vaciar carrito</button>
                <Link to='/'><button className='btn btn-warning'>Seguir comprando</button></Link>
                <button className='btn btn-warning'>Finalizar Compra</button>
            </div>
        </div>
    )
}

export default Cart;