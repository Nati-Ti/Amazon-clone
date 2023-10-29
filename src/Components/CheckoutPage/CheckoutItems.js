import React from 'react'
import './CheckoutItems.css'
import { useStateValue } from '../Context/stateProvider'
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

function CheckoutItems() {

    const [{cart}, dispatch] = useStateValue();


    return (
        <div className='checkoutItemsPage'>
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
        </div>
    )
}

export default CheckoutItems