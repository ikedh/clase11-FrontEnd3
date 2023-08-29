import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navegador'>
        <ul>
           <li>
                <Link to='/' >Inicio</Link>
           </li>
           <li>
                <Link to='/contacto'>Contacto</Link>
           </li>
           <li>
                <Link to='/inicio-sesion'>Log In</Link>
           </li>
        </ul>
    </div>
  )
}

export default NavBar