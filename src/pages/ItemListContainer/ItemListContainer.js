import User from "./User"
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
        </div>
    );
}
export default ItemListContainer

