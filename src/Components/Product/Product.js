import React, { useEffect, useState } from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../Context/stateProvider';


function Product({prodId, prodImg, prodDescr, prodOffer, prodPrice,prodView, prodRating}) {

    const [{ cart, user }, dispatch] = useStateValue();
    const [itemSelected, setItemSelected] = useState(false);

    const navigate = useNavigate();

    const addToCart = () =>{
        if (user) {
            dispatch({
                type: 'ADD_TO_CART',
                item: {
                    id: prodId,
                    image: prodImg,
                    description: prodDescr,
                    rating: prodRating,
                    quantity: 1, 
                    price: prodPrice,
                    view: prodView,
                    offer: prodOffer
                }
            });
            // setItemSelected(true);
            localStorage.setItem(`quantity-${prodId}`, 1);
        } else {
            navigate('/Login');
        }  
    }

    useEffect(() => {
      const itemAdded = localStorage.getItem(`quantity-${prodId}`);
      setItemSelected(itemAdded ? true : false);
    }, [cart]);

    function truncate(str) {
        return str?.length > 65 ? str.substr(0, 65) + "..." : str;
    }
    

    return (
        <div className='Product'>
          <div className='Product--Wrapper'>
            <img className='Product--Img' src={prodImg} alt={prodDescr}/>

            <div className={`Product--Description ${prodDescr.length < 40 ? "Prod--Descr2" : ""}`}>
                {truncate(prodDescr)}
            </div>

            <div className='Product--Rating'>
                {Array(Math.floor(prodRating))
                .fill()
                .map((_, i) => (
                <p key={i} ><img className='starIcon' src='https://www.svgrepo.com/show/13695/star.svg' alt='star Icon' /> </p>
                ))} 
            </div>

            <div className='Product--BuyerView'>
                {prodView} viewed in past month
            </div>

            <div className='Product--Offer'>
                {prodOffer} offers from 
                <div className='Product--Offer__price'>
                    ${prodPrice}
                </div>
            </div>
          </div>

          <button onClick={addToCart} disabled={itemSelected} className={`addToCart ${itemSelected && 'itemAdded'}`}>{itemSelected ? 'Added!' : 'Add to Cart'}</button>
        </div>
    )
}

export default Product