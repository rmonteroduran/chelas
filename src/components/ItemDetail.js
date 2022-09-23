import ItemCount from "./ItemCount";
import { toast } from 'react-toastify';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';
import Loader from "./Loader";

const ItemDetail = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const cart = useContext(CartContext);

  const onAdd = (count) => {
      if (count===0) {
        toast.warn("Seleccione la cantidad de chelas.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else if (count===1) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Se agregó 1 chela al carrito!',
          showConfirmButton: false,
          timer: 2000
        })
        setItemCount(count);
        cart.addItem(props.item, count);
      } else {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Se agregaron ' + count + ' chelas al carrito!',
          showConfirmButton: false,
          timer: 2000
        })
        setItemCount(count);
        cart.addItem(props.item, count);
      }
    }

  if (!props.item.id) {
    return <Loader />
  }

  return (
    <>
    <div className="detail">
      <div>
        <img src={props.item.image} alt="..." />
      </div>
      <div className="card">
            <h4>{props.item.name}</h4>
            <p><small>{props.item.description}</small></p>
            <p><small>{props.item.format}</small></p>
            <h5>${props.item.price}</h5>
            {
              itemCount === 0
              ? <ItemCount stock={props.item.stock} initial={itemCount} onAdd={onAdd} /> 
              : <Link to='/cart'><button className="btn btn-warning">Checkout</button></Link>
            }
      </div>
    </div>
    </>
  )
}

export default ItemDetail;