
import './Header.scss'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useLoginContext } from '../../context/LoginContext'

export const Header = () => {

    const {user, logout} = useLoginContext()

    return (
        <header className="bg-header">
            <div className="header-container">

                <Link to="/"><h1>Agency Travel</h1></Link>

                <nav className="header-navbar">
                    <Link to='/productos/vuelos' className="navlink">Vuelos</Link>
                    <Link to='/productos/hoteles' className="navlink">Hoteles</Link>
                    <Link to='/productos/paquetes' className="navlink">Paquetes</Link>
                    <Link to='/nosotros' className="navlink">Nosotros</Link>
                    <Link to='/contacto' className="navlink">Contacto</Link>
                </nav>

                <CartWidget  />
            </div>

            <div className='header-user'>
                <small>Bienvenido: {user.user}</small>
                <button onClick={logout} className='btn btn-outline-danger'>Logout</button>
            </div>
            
        </header>
    )
}