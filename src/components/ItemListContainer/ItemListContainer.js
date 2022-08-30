import User from "./User"
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

export const ItemListContainer = ({ CursoCoder = "ReactJS", Profesor = "Conrado Lanusse" }) => {
    const usuarioCoder = [
        {
            nombre: 'Juan Sebastian',
            apellido: 'Vargas Rocha',
            ciudad: 'Medellín, Colombia',
            edad: 28
        }
    ]


    return (
        <div>
            <hr />
            <h1 className="text-primary">Estamos en el curso: {CursoCoder}</h1>
            <h1 className="text-primary">El profesor es: {Profesor}</h1>
            <hr />
            <h1>Datos del estudiante:</h1>
            <User usuario={usuarioCoder[0]} />
            <hr />
            <hr />
            <hr />
            <ItemCount  stock="5" initial="1"/>
        </div>
    );
}
export default ItemListContainer

