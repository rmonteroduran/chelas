import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { doc, collection, serverTimestamp, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../data/firebaseConfig';
import Swal from 'sweetalert2';

const Cart = () => {
    const cart = useContext(CartContext);

    const createContact = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Datos de contacto',
            html:
                '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Email">'+
                '<input id="swal-input3" class="swal2-input" placeholder="Telefono">',
            focusConfirm: false,
            preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
                document.getElementById('swal-input3').value
            ]
            }
        })
        createOrder(formValues)
    }

    const createOrder = (contactValues) => {

        let items = cart.cartList.map(item => ({
            id: item.id,
            title: item.name,
            price: item.price,
            qty: item.qty
        }))
        let order = {
            buyer: {
                name: contactValues[0],
                email: contactValues[1],
                phone: contactValues[2]
            },
            date: serverTimestamp(),
            items: items,
            subtotal: cart.cartBill,
            IVA: cart.cartBill*0.21,
            total: cart.cartBill+(cart.cartBill*0.21)
        };
        
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db,"orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        };

        createOrderInFirestore()
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Se ha creado su orden #' + result.id,
                    showConfirmButton: true
                })
            })
            .catch(err => console.log(err));

        cart.cartList.forEach(async(item) => {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.qty)
            })
        });
        
        cart.removeAll();
    }


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
                        <div>Total ${(item.price * item.qty).toFixed(2)}</div>
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
                    <div className='pedido-item'><div>Subtotal</div><div>${(cart.cartBill).toFixed(2)}</div></div>
                    <div className='pedido-item'><div>IVA</div><div>${(cart.cartBill*0.21).toFixed(2)}</div></div>
                    <div className='pedido-item'><div>Descuentos</div><div>$0</div></div>
                    <div className='pedido-item'><h5>Total</h5><h5>${(cart.cartBill + (cart.cartBill*0.21)).toFixed(2)}</h5></div>
                </div>
                <div className='buttons-carrito'>   
                    <button className='btn btn-warning' onClick={createContact}>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;