


const ItemDetail = ({item}) => {

    return (
        <div className="container my-5" >
            <img src={item.pictureUrl} alt="img" />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
        </div>
    )
}

export default ItemDetail