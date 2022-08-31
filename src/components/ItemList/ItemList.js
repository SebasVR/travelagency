import Item from "../Item/Item"


const ItemList = ({ productos = [] }) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
                </div>
            </div>
            
        </div>


    )
}

export default ItemList