import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useContext(CartContext);

    if (cart.cartLenght === 0) {
        return <div className='carrito-empty'>
        <div className='item-carrito'>No hay productos</div>
        <div className='buttons-carrito'>
        <button className='btn btn-warning' onClick={cart.removeAll} disabled>Vaciar carrito</button>
        <Link to='/'><button className='btn btn-warning'>Seguir comprando</button></Link>
        <button className='btn btn-warning' disabled>Finalizar Compra</button>
        </div>
    </div>
    }

    return (
        <div className='carrito'>
            <div className='carrito-detalle'>
            {
            cart.cartList.map(item =>
                    <div key={item.id} className="item-carrito">
                        <img src={item.image} className="card-img-top-carrito" alt="..." />
                        <div>{item.name}</div>
                        <div>Cantidad: {item.qty}</div>
                        <div>Total ${item.price * item.qty}</div>
                        <button className='btn btn-warning' onClick={() => cart.removeItem(item.id)}>Eliminar</button>
                    </div>
                )
            }
            <div className='buttons-carrito'>
                <button className='btn btn-warning' onClick={cart.removeAll}>Vaciar carrito</button>
                <Link to='/'><button className='btn btn-warning'>Seguir comprando</button></Link>               
            </div>
            </div>
            <div className="carrito-resumen">
                <div className='pedido'>
                    <h4>Resumen de pedido</h4>
                    <div className='pedido-item'><div>Subtotal</div><div>${cart.cartBill}</div></div>
                    <div className='pedido-item'><div>IVA</div><div>${cart.cartBill*0.21}</div></div>
                    <div className='pedido-item'><div>Descuentos</div><div>$0</div></div>
                    <div className='pedido-item'><h5>Total</h5><h5>${cart.cartBill + (cart.cartBill*0.21)}</h5></div>
                </div>
                <div className='buttons-carrito'>
                    <button className='btn btn-warning'>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;