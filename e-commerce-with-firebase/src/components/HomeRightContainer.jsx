

import iconMinus from '../estilos/images/icon-minus.svg'
import iconPlus from '../estilos/images/icon-plus.svg'
import iconCart2 from '../estilos/images/icon-cart2.svg'

import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { OpenContext } from '../context/openCartContext'

import './HomeRightContainer.css'


const HomeRightContainer = () => {

  const { counter, removeProduct, addProduct, handleValue } = useContext(CartContext)
  // const { setOpenCart } = useContext(OpenContext)

  return (
    <div className="homeRight">
      <div className="sneakerCompany">
        SNEAKER COMPANY
      </div>
      <div className="fallLimited">
        Fall Limited Edition Sneakers
      </div>
      <div className="textRight">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </div>
      <div className="prices">
        <div className="actualPrice">
          <span id='price125'>$125.00</span> <span id='percent50'>50%</span>
        </div>
        <div className="oldPrice">
          $250
        </div>
      </div>
      <div className="addCartArea">
        <div className="addAndRemove">
          <span><img id='iconMinus' src={iconMinus} onClick={removeProduct} /></span> {counter} <span><img onClick={addProduct} id='iconPlus' src={iconPlus} /></span>
        </div>
        <div className="buttonAddToCart">
          <button onClick={handleValue} id='btnAdd'><img src={iconCart2} />Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default HomeRightContainer