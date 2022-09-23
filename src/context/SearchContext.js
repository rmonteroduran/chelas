import { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = ({children}) => {
    const [busqueda, setBusqueda] = useState();
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);

    return (
        <SearchContext.Provider value={{busqueda, products, searchProducts, setBusqueda, setProducts, setSearchProducts}}> 
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;