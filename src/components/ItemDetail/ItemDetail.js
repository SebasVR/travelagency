import { useState } from "react"
import Counter from "../Counter/Counter"



const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
        }

        console.log(itemToCart)
    }

    return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
            <hr/>

            <Counter 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            />

        </div>
    )
}

export default ItemDetail