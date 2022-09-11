import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import cargaStock from "../../utils/promises/cargaStock";
import {data} from '../../utils/data/data';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]); //hook (estado)
    const { id } = useParams(); //hook, lee la url y da el valor dinamico del parametro id

    //componentDidMount
    useEffect(() => {
        if (id) {
            cargaStock(data.filter(item => item.category === parseInt(id)))
                .then(result => setProducts(result))
                .catch(err => console.log(err))
        } else {
            cargaStock(data)
                .then(result => setProducts(result))
                .catch(err => console.log(err))            
        }
    }, [id])

    return (
        <div className="products">
            <ItemList items={products} />
        </div>
    )
};

export default ItemListContainer;