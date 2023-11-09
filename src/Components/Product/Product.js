import React from 'react'
import './Product.css'
import { useStateValue } from '../Context/stateProvider';


function Product({prodId, prodImg, prodDescr, prodOffer, prodPrice,prodView, prodRating}) {

    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () =>{
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: prodId,
                image: prodImg,
                description: prodDescr,
                rating: prodRating,
                price: prodPrice,
                view: prodView,
                offer: prodOffer
            }
        });
    }

    function truncate(str) {
        return str?.length > 65 ? str.substr(0, 65) + "..." : str;
    }
    

    return (
        <div className='Product'>
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
            <button onClick={addToCart} className='addToCart'>Add to Cart</button>
        </div>
    )
}

export default Product