import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartLenght, setCartLenght] = useState(0);
    const [cartBill, setCartBill] = useState(0);

    const addItem = (item, qty) => {
        let exist = cartList.find(prod => prod.id === item.id)
        if (exist) {
            exist.qty = exist.qty + qty
            setCartLenght(cartLenght + qty);
            setCartBill(cartBill + item.price);
        } else {
            let itemForCart = {
                ...item,
                qty
            };
            setCartList([
                ...cartList, //spread operator
                itemForCart
            ]);
            setCartLenght(cartLenght + qty);
            setCartBill(cartBill + item.price);
        }
    };

    const removeItem = (id) => {
        let itemList = cartList.filter(item => item.id === id);
        let qty = itemList.map(item => item.qty)
        let price = itemList.map(item => item.price)
        setCartLenght(cartLenght - qty);
        setCartBill(cartBill - price);
        let newCartList = cartList.filter(item => item.id !== id);
        setCartList(newCartList);
    };

    const removeAll = () => {
        setCartList([]);
        setCartLenght(0);
        setCartBill(0);
    };

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, removeAll, cartLenght, cartBill}}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;