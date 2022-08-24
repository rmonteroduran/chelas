import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    return (
            <div className="card">
                <img src="andes-ipa.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Andes IPA</h5>
                    <ItemCount stock={5} initial={1} />
                </div>
            </div>
    )
};

export default ItemListContainer;