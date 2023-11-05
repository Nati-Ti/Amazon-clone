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

    const totalPrice = cart.reduce((total, item) => {
        return parseFloat(item.price) + total;
    }, 0);

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
                        {!cart.length ? 
                            <div className='emptyItem'>Please go back to the products and add to your cart.</div>
                        : (
                            cart.map((item) => {
                            return (
                                <CartItem
                                prodId={item.id}
                                prodImg={item.image}
                                prodDescr={item.description}
                                prodPrice={item.price}
                                prodRating={item.rating}
                                key={item.id}
                                />
                            );
                            })
                        )}
                    </div>
                </div>


                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout