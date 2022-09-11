import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {
        let exist = cartList.find(prod => prod.id === item.id)
        if (exist) {
            exist.qty = exist.qty + qty
        } else {
            let itemForCart = {
                ...item,
                qty
            };
            setCartList([
                ...cartList, //spread operator
                itemForCart
            ]);
        }
    };

    const removeItem = (id) => {
        let newCartList = cartList.filter(item => item.id !== id);
        setCartList(newCartList);
    };

    const removeAll = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, removeAll}}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;