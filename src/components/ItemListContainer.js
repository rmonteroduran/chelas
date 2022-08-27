import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import cargaStock from "../utils/promises/cargaStock";
import {data} from '../utils/data/data';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]); //hook (estado)

    //componentDidMount
    useEffect(() => {
        cargaStock(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="products">
        <ItemList items={products} />
        </div>
    )
};

export default ItemListContainer;