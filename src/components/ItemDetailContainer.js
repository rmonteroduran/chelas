import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import cargaStock from "../utils/promises/cargaStock";
import {data} from '../utils/data/data';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    //componentDidMount
    useEffect(() => {
        cargaStock(data[9])
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
        <ItemDetail item={product} />
        </div>
    )
};

export default ItemDetailContainer;