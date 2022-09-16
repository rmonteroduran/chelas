import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from '../../utils/data/firebaseConfig'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]); //hook (estado)
    const { id } = useParams(); //hook, lee la url y da el valor dinamico del parametro id

    //componentDidMount
    useEffect(() => {
        firestoreFetch(id)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className="products"><ItemList items={products} /></div>
    )
};

export default ItemListContainer;