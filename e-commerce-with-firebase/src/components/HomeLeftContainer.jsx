import { useState } from 'react'
import './HomeLeftContainer.css'

import product1 from '../estilos/images/image-product-1.jpg'
import product2 from '../estilos/images/image-product-2.jpg'
import product3 from '../estilos/images/image-product-3.jpg'
import product4 from '../estilos/images/image-product-4.jpg'
import thumbProduct1 from '../estilos/images/image-product-1-thumbnail.jpg'
import thumbProduct2 from '../estilos/images/image-product-2-thumbnail.jpg'
import thumbProduct3 from '../estilos/images/image-product-3-thumbnail.jpg'
import thumbProduct4 from '../estilos/images/image-product-4-thumbnail.jpg'
import iconPrev from '../estilos/images/icon-previous.svg'
import iconNext from '../estilos/images/icon-next.svg'
import iconClose from '../estilos/images/icon-close.svg'

const HomeLeftContainer = () => {

    const [openMainProduct, setOpenMainProduct] = useState(false)
    const [handleMainProduct, setHandleMainProduct] = useState(1)

    const handleNext = () => {
        if (handleMainProduct == 1) {
            setHandleMainProduct(2)
        }
        if (handleMainProduct == 2) {
            setHandleMainProduct(3)
        }
        if (handleMainProduct == 3) {
            setHandleMainProduct(4)
        }
        if (handleMainProduct == 4) {
            setHandleMainProduct(1)
        }
    }

    const handlePrev = () => {
        if (handleMainProduct == 4) {
            setHandleMainProduct(3)
        }
        if (handleMainProduct == 3) {
            setHandleMainProduct(2)
        }
        if (handleMainProduct == 2) {
            setHandleMainProduct(1)
        }
        if (handleMainProduct == 1) {
            setHandleMainProduct(4)
        }
    }

    return (
        <>
            <div className="homeLeft">
                <div className="mainProductImage" onClick={() => setOpenMainProduct(prevState => !prevState)}>
                    <div className="iconPrevMobile" onClick={handlePrev}><img src={iconPrev} /></div>
                    <div className="iconNextMobile" onClick={handleNext}><img src={iconNext} /></div>
                    <img className={`mainImage1 ${handleMainProduct == 1 ? "" : 'active'}`} src={product1} />
                    <img className={`mainImage2 ${handleMainProduct == 2 ? "active" : ''}`} src={product2} />
                    <img className={`mainImage2 ${handleMainProduct == 3 ? "active" : ''}`} src={product3} />
                    <img className={`mainImage2 ${handleMainProduct == 4 ? "active" : ''}`} src={product4} />
                </div>
                <div className="thumbProducts">
                    <div className="boxThumbProduct">
                        <img className='thumbProduct' src={thumbProduct1} onClick={() => setHandleMainProduct(1)} />
                    </div>
                    <div className="boxThumbProduct">
                        <img className='thumbProduct' src={thumbProduct2} onClick={() => setHandleMainProduct(2)} />
                    </div>
                    <div className="boxThumbProduct">
                        <img className='thumbProduct' src={thumbProduct3} onClick={() => setHandleMainProduct(3)} />
                    </div>
                    <div className="boxThumbProduct">
                        <img className='thumbProduct' src={thumbProduct4} onClick={() => setHandleMainProduct(4)} />
                    </div>
                </div>
            </div>
            <div className={`lightBoxHome ${openMainProduct == true ? "active" : ''}`}>
                <div className="homeLeftShadow">
                    <div className="mainProductImageShadow">
                        <div className="iconClose" onClick={() => setOpenMainProduct(prevState => !prevState)}><img id='iconClose' src={iconClose} /></div>
                        <img className={`mainImageShadow1 ${handleMainProduct == 1 ? "" : 'active'}`} src={product1} />
                        <img className={`mainImageShadow2 ${handleMainProduct == 2 ? "active" : ''}`} src={product2} />
                        <img className={`mainImageShadow3 ${handleMainProduct == 3 ? "active" : ''}`} src={product3} />
                        <img className={`mainImageShadow4 ${handleMainProduct == 4 ? "active" : ''}`} src={product4} />
                        <div className="iconPrev" onClick={handlePrev}><img src={iconPrev} /></div>
                        <div className="iconNext" onClick={handleNext}><img src={iconNext} /></div>
                    </div>
                    <div className="thumbProducts">
                        <div className="boxThumbProductShadow">
                            <div className="whiteBoxShadow" onClick={() => setHandleMainProduct(1)}></div>
                            <img className='thumbProductShadow' src={thumbProduct1} />
                        </div>
                        <div className="boxThumbProductShadow">
                            <div className="whiteBoxShadow" onClick={() => setHandleMainProduct(2)}></div>
                            <img className='thumbProductShadow' src={thumbProduct2} />
                        </div>
                        <div className="boxThumbProductShadow">
                            <div className="whiteBoxShadow" onClick={() => setHandleMainProduct(3)}></div>
                            <img className='thumbProductShadow' src={thumbProduct3} />
                        </div>
                        <div className="boxThumbProductShadow">
                            <div className="whiteBoxShadow" onClick={() => setHandleMainProduct(4)}></div>
                            <div className="thumbProductWhite"></div>
                            <img className='thumbProductShadow' src={thumbProduct4} />
                        </div>
                    </div>
                </div>
                <div className="shadow"></div>
            </div>
        </>

    )
}

export default HomeLeftContainer