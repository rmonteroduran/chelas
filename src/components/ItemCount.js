import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial}) => {
    const [qty, setQty] = useState(initial);

    const qtyAdd = () => {
        if (qty<stock) {
            setQty(qty+1);
        } else {
            toast.warn("No contamos con más stock :-(", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        };
    }

    const qtyRest = () => {
        if (qty>1) {
            setQty(qty-1);
        };
    }

    const onAdd = () => {
        if (qty===1) {
            toast.warn("Se agregó " + qty + " chela al carrito!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else {
            toast.success("Se agregaron " + qty + " chelas al carrito!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        };
    }

    return (
        <div>
            <div className='card-body item-count'>
                <div className="card-text">
                    <button className="btn btn-warning" onClick={qtyRest}>-</button>
                </div>
                <div className="card-text">
                    <h3>{qty}</h3>
                </div>
                <div className="card-text">
                    <button className="btn btn-warning" onClick={qtyAdd}>+</button> 
                </div>
            </div>
            <div>
                <button className="btn btn-warning" onClick={onAdd}>Agregar</button> 
            </div>
            <ToastContainer/>
        </div>
    )
};

export default ItemCount;