import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from '../Context/stateProvider'
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './Axios';

function Payment() {

    const [{cart, user}, dispatch] = useStateValue();

    const totalPrice = cart.reduce((total, item) => {
        return parseFloat(item.price) + total;
    }, 0);

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [clientSecret, setClientSecret] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        setProcessing(true);
    };

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    return (
        <div className='paymentPage'>
            <div className='itemsPage__header'>
                <div className='header__logo'>
                    <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='amazon logo'/>
                </div>
                <div className='header__checkout'>
                    Checkout (
                        <Link className='header__redirectLink' to='/Checkout'>
                            {cart.length} items
                        </Link>)
                </div>
                <LockIcon className='header__lockIcon' />
            </div>


            <div className="itemsPage__content">
                <div className="deliveryAddress">
                    <h3>Delivery <br/> Address</h3>
                    <div className='deliveryDetails'>
                        {user.email}<br/>
                        123 Angola St. <br/>
                        Addis Ababa, Ethiopia
                    </div>
                </div>
                <div className="itemsReview">
                    <h3>Review items <br/> and delivery</h3>
                    <div className='itemsReview__item'>
                        {cart.map((item)=>{
                            return(
                                <CartItem prodId={item.id} prodImg={item.image} prodDescr={item.description} prodPrice={item.price} prodRating={item.rating} />
                        )})}
                    </div>
                </div>
                <div className="paymentMethod">
                    <h3>Payment Method</h3>
                    <div className='payment__detail'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            {error && <div className='errorLog'>{error}</div>}
                            <div className='payment__detailPrice'>
                                <CurrencyFormat
                                    renderText={(value) => <h4>Order Total: {value}</h4>}
                                    decimalScale={2}
                                    value={totalPrice}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>{processing ? <p>Processing...</p> : 'Buy Now'} </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment