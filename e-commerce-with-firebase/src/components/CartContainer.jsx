import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { OpenContext } from "../context/openCartContext"

import './CartContainer.css'

import deleteIcon from '../estilos/images/icon-delete.svg'
import product1 from '../estilos/images/image-product-1.jpg'

const CartContainer = () => {

    const { counter, removeProduct, numberCart } = useContext(CartContext)
    const { openCart } = useContext(OpenContext)


    return (
        <div className={`openCart ${openCart == true ? "active" : ""}`}>
            <div className="cart">
                Cart
            </div>
            <hr />
            {numberCart == 0 && (
            <div className="emptyCart">
                Your cart is empty.
            </div>
            )}
            {numberCart > 0 && (
                <div className="filledCart">
                <div className="filledCartTop">
                    <div className="leftFilled">
                        <img id="product1Cart" src={product1} />
                    </div>
                    <div className="midFilled">
                        <div className="textFilled">
                            Fall Limited Edition Sneakers.
                        </div>
                        <div className="filledValue">
                            $125.00 x {numberCart} <span id="finalValue">${125 * numberCart}.00</span>
                        </div>
                    </div>
                    <div className="rightFilled">
                        <div className="deleteIcon">
                            <img id="iconDelete" onClick={removeProduct} src={deleteIcon} />
                        </div>
                    </div>
                </div>
                <div className="filledCartBottom">
                    <button id="btnCheckout">Checkout</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default CartContainer