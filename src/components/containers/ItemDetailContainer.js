import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { firestoreDoc } from '../../utils/data/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    //componentDidMount
    useEffect(() => {
        firestoreDoc(id)
        .then(result => setProduct(result))
        .catch(err => console.log(err))
    }, [id])

    return <div><ItemDetail item={product} /></div>;
};

export default ItemDetailContainer;