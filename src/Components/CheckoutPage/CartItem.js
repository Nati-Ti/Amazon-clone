import React, { useState } from 'react'
import './CartItem.css'
import { useStateValue } from '../Context/stateProvider';


function CartItem({removeCheckbox, prodId, prodImg, prodDescr, prodPrice, prodRating}) {

    const [isChecked, setIsChecked] = useState(true);
    const [{cart}, dispatch] = useStateValue();

    const itemRemoved = () =>{
        // setIsChecked(false);
        dispatch({
            type: 'REMOVE_ITEM',
            id: prodId,
            });
    }
    return (
        <div className='CartItem'>

            {!removeCheckbox ? <div className='item__checkBox'>
                <input type="checkbox" checked={isChecked} onChange={itemRemoved} id="myCheckbox" name="myCheckbox" />
            </div> : null }
            
            <div className='item__image'>            
                <img src={prodImg} alt={prodDescr}/>
            </div>
            <div className='item__content'>
                <div className='item__descr'>
                    {prodDescr}
                </div>
                <div className='item__rating'>
                {Array(Math.floor(prodRating))
                .fill()
                .map((_, index) => (
                <p key={index}><img className='starIcon' src='https://www.svgrepo.com/show/13695/star.svg' alt='star Icon' /> </p>
                ))} 
                </div>
                <div className='item__price'>
                    <strong>${prodPrice}</strong>
                </div>
                <div className='bestSeller__badge'>
                    <img src='https://www.ecomcrew.com/wp-content/uploads/2021/08/Amazon.com_-HTDB.png' alt='best seller badge' />
                </div>
                <div className='item__learnMore'>
                    Gift options not available.  <a href='/LearnMore'> Learn more</a>
                </div>
                <div className='item__size'>
                    <strong>Size: </strong> unknown (Pack of 1)
                </div>
                <div className='item__additionals'>
                    {/* <select>Qty: value</select> */}
                    <div class="custom-select">
                        
                        <select>
                            <option value="option1">Qty: 1</option>
                            <option value="option2">2</option>
                            <option value="option3">3</option>
                        </select>
                    </div>
                    <div className='item__add__links'>
                        <a href='/Delete'>Delete</a>
                        <a href='/Saveforlater'>Save for later</a>
                        <a href='/Compare'>Compare with similar items</a>
                        <a href='/Share'>Share</a>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default CartItem