import React from 'react'
import './Home.css'
import Product from '../Product/Product'
import Products from '../Product/ProductsJSON'


function Home() {
    return (
        <div className='Home'>
            <div className='Home--Banner'>
                <img className='Banner__img' src='https://m.media-amazon.com/images/I/71jTTOiYMrL._SX3000_.jpg' alt='AmazonPrime Banner' />
            </div>
            <div className='productRow'>
                {Products.map((prod) =>{
                    return(
                    <Product prodDescr={prod.Description} prodImg={prod.Image} prodOffer={prod.Offer} prodPrice={prod.Price} prodView={prod.View} prodRating={prod.Rating} key={prod.Description}/>
                )})}                
            </div>

            <div className='productRow'>
                {Products.map((prod) =>{
                    return(
                    <Product prodDescr={prod.Description} prodImg={prod.Image} prodOffer={prod.Offer} prodPrice={prod.Price} prodView={prod.View} prodRating={prod.Rating} key={prod.Description}/>
                )})}                
            </div>
        </div>
    )
}

export default Home