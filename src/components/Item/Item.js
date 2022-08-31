

const Item = ( {producto} ) => {

    return (
        <div>
            <img src={producto.pictureUrl}/>
            <h4>{producto.title}</h4>
            <p>Precio: {producto.price}</p>
            <a className="btn btn-primary my-2">Ver más</a>
        </div>
    )
}

export default Item