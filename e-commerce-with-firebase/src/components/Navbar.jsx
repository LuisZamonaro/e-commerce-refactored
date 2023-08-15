import { NavLink } from "react-router-dom"
import { useAuthentication } from "../hooks/useAuthentication"

import './Navbar.css'

import { useAuthValue } from "../context/authContext"

import logoPage from '../estilos/images/logo.svg'
import iconCart from '../estilos/images/icon-cart.svg'
import userPhoto from '../estilos/images/image-avatar.png'

import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { OpenContext } from "../context/openCartContext"
import CartContainer from "./CartContainer"


const Navbar = () => {

  const { user } = useAuthValue()
  const { logout } = useAuthentication()

  const { numberCart } = useContext(CartContext)
  const { setOpenCart } = useContext(OpenContext)

  return (
    <div className="containerNavbar">
      <nav className="navbar">
        <div className="navbarLeft">
          <NavLink to="/"><img src={logoPage} /></NavLink>
          <span className="itensNavbar">
            <NavLink to="/collections">Collections</NavLink>
            <NavLink to="/men">Men</NavLink>
            <NavLink to="/women">Women</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </span>
          {!user && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
          <span className="itensNavbar">
            <NavLink to="/about">About</NavLink>
          </span>
          {user && (
            <button id="logout" onClick={logout}>Logout</button>
          )}
        </div>
        <div className="navbarRight">
          <div className="iconCart">
            <img src={iconCart} onClick={() => setOpenCart(prevState => !prevState)} />
          </div>
          {numberCart > 0 && (<div className="counterInCart">{numberCart}</div>)}
          <CartContainer />
          <div className="userPhoto">
            <img id="userPhoto" src={userPhoto} />
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar