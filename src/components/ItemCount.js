import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial, onAdd}) => {
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
        if (qty>0) {
            setQty(qty-1);
        };
    }

    return (
        <div>
            <div className='card-body item-count'>
            <div className="card-text">
                <button className="btn btn-warning qty" onClick={qtyRest}>-</button>
            </div>
            <div className="card-text">
                <h5>{qty}</h5>
            </div>
            <div className="card-text">
                <button className="btn btn-warning qty" onClick={qtyAdd}>+</button> 
            </div>
            </div>
            <div>
            <button className="btn btn-warning" onClick={() => onAdd(qty)} disabled={!stock || !qty}>Agregar</button>         
            </div>
            <ToastContainer/>
        </div>
    )

};

export default ItemCount;