import Item from './Item';

const ItemList = (props) => {
    return (
        <> {/*fragment*/}
        {
            props.items.map(item => (
            <Item
            id={item.id}
            key={item.id}
            name={item.name}
            format={item.format}
            price={item.price}
            image={item.image}
            category={item.category} 
            stock={item.stock} />
            )) 
        }
        </>
    )
};

export default ItemList;