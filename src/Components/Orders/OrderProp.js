import React from 'react'
import './Orders.css'
import moment from 'moment/moment'
import CartItem from '../CheckoutPage/CartItem'
import CurrencyFormat from 'react-currency-format'

function OrderProp({order}) {
    return (
        <div className='order'>
            <div className='order__header'>
                <div>
                    <h2>Order</h2>
                    <p>{order.id}</p>
                </div>
                <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            </div>

            <div className='order__items'>
                {order.data.cart?.map((item) => {
                    return(
                        <CartItem 
                        removeCheckbox 
                        prodId={item.id} 
                        prodImg={item.image} 
                        prodDescr={item.description} prodPrice={item.price} 
                        prodRating={item.rating} 
                        key={item.id}/>
                    )
                })}              
            </div>

            <div className='order__price'>
                <CurrencyFormat
                    renderText={(value) => (
                        <h3 className="order__total">
                            Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                />
            </div>
        </div>
    )
}

export default OrderProp