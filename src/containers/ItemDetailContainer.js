import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { firestoreDoc } from '../data/firebaseConfig'

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