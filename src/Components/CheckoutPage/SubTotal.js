import React from 'react'
import './SubTotal.css'
import { useStateValue } from '../Context/stateProvider'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

function SubTotal() {
    const [{cart}, dispatch] = useStateValue();
    const totalPrice = cart.reduce((total, item) => {
        return (parseFloat(item.price) * parseInt(item.quantity)) + total;
    }, 0);
    return (
        <div className='Subtotal'>
            <CurrencyFormat 
            renderText={(value) => 
            (
            <div className='checkout--subtotal'>
                <div className='checkout--items--price'>
                    <div className='checkout__items'>
                        Subtotal {`(${cart.length} items)`}: 
                    </div>
                    <div className='checkout__price'>
                        {value}
                    </div>
                </div>
                <Link to='/Payment'>
                    <button className='checkout__button'>
                        Proceed to checkout
                    </button>
                </Link>
            </div>
            )}
            decimalScale={2}
            value={totalPrice}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            
        </div>
    )
}

export default SubTotal