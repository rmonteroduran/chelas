import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import cargaStock from "../../utils/promises/cargaStock";
import {data} from '../../utils/data/data';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    //componentDidMount
    useEffect(() => {
        cargaStock(data.find(item => item.id === parseInt(id)))
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
        <ItemDetail item={product} />
        </div>
    )
};

export default ItemDetailContainer;