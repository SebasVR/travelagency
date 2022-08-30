
const User = ( {usuario} ) => {

    const {nombre, apellido, edad, ciudad} = usuario
    return (
        <div>
            <h4>Nombre: {nombre}</h4>
            <p>Apellido: {apellido}</p>
            <p>Edad: {edad}</p>
            <p>Ciudad: {ciudad}</p>
        </div>
    )
}

export default User;