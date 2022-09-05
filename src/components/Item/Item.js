import { Link } from 'react-router-dom';

const Item = ( {producto} ) => {

    return (
        <div>
            <img src={producto.pictureUrl} alt="Logo"/>
            <h4>{producto.title}</h4>
            <p>Precio: {producto.price}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
        </div>
    )
}

export default Item