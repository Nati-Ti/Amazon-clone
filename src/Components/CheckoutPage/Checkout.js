import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'
import CartItem from './CartItem'
import MiniBanner from './MiniBanner'
import { useStateValue } from '../Context/stateProvider'

function Checkout() {
    
    const [{ cart }, dispatch] = useStateValue();

    const emptyCart = () => {
        dispatch({
            type: 'EMPTY_CART'  
        })
    }
    return (
        <div className='CheckoutPage'>
            <MiniBanner />

            <div className='checkoutPage--content'>

                <div className='checkout--shoppingCart'>
                    <div className='shoppingCart__header'>
                        <div className='header__title'>
                            Shopping Cart
                        </div>
                        <div className='shoppingCart__deselect' onClick={emptyCart}>
                            Deselect all items
                        </div>
                    </div>

                    

                    <div className='shoppingCart--item'>
                        {cart.map((item)=>{
                            return(
                                <CartItem prodImg={item.image} prodDescr={item.description} prodPrice={item.price} prodRating={item.rating} />
                        )})}
                    </div>
                </div>


                <SubTotal />
            </div>

            
        </div>
    )
}

export default Checkout