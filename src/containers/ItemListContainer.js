import { useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from '../data/firebaseConfig'
import { useContext } from "react";
import { SearchContext } from '../context/SearchContext';

const ItemListContainer = () => {
    const search = useContext(SearchContext);
    const { id } = useParams(); 

    //componentDidMount
    useEffect(() => {
        firestoreFetch(id)
        .then(result => {
            search.setProducts(result)
            search.setSearchProducts(result)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className="products"><ItemList items={search.products} /></div>
    )
};

export default ItemListContainer;