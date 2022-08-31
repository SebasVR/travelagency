import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial)

    const handleSumar = () => {
        if (stock > counter) {
            setCounter(counter + 1)
            onAdd = counter + 1;
            console.log("onAdd", onAdd);
        }
        if(counter > stock){
            console.log("Ya no puede seleccionar mas productos, no hay stock");
        }
        
    }

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            onAdd = counter - 1;
            console.log("onAdd", onAdd);
        }
    }

    return (
        <div className="container my-5">
            <h2>Camisa Argentina</h2>

            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button> Producto Seleccionado(s)

        </div>
    )
}

export default ItemCount