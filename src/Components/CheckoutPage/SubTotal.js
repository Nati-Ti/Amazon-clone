import React from 'react'
import './SubTotal.css'
import { useStateValue } from '../Context/stateProvider'

function SubTotal() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className='Subtotal'>
            <div className='checkout--subtotal'>
                <div className='checkout--items--price'>
                    <div className='checkout__items'>
                        Subtotal {`(${cart.length} items)`}: 
                    </div>
                    <div className='checkout__price'>
                        $0.00
                    </div>
                </div>
                <button className='checkout__button'>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default SubTotal