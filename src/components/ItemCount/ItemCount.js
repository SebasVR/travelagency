import { useState, useEffect } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(parseInt(initial))

    const handleSumar = () => {
        if (parseInt(stock) > counter) {
            setCounter(counter + 1)
            onAdd = counter + 1;
            console.log("onAdd", onAdd);
        }
        if(counter > parseInt(stock)){
            console.log("Ya no puede seleccionar mas productos, no hay stock");
        }
        
    }

    const handleRestar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
            onAdd = counter - 1;
            console.log("onAdd", onAdd);
        }
    }

    useEffect(() => {
        
    }, [counter])



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