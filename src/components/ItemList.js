import Item from './Item';

const ItemList = (props) => {
    return (
        <> {/*fragment*/}
        {
            props.items.map(item => (
            <Item
            key={item.id}
            name={item.name}
            description={item.description}
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