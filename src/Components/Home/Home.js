import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import Products from '../Product/ProductsJSON';

function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 1200) {
            setProductCount(Products.length);
        } else if (windowWidth < 1200 && windowWidth >= 1080) {
            setProductCount(5);
        } else if (windowWidth < 1080 && windowWidth >= 992) {
            setProductCount(4);
        } else if (windowWidth < 992) {
            setProductCount(3);
        }
    }, [windowWidth]);

    const displayedProducts = Products.slice(0, productCount);

    return (
    <div className='Home'>
        <div className='Home--Banner'>
        <img
            className='Banner__img'
            src='https://m.media-amazon.com/images/I/71jTTOiYMrL._SX3000_.jpg'
            alt='AmazonPrime Banner'
        />
        </div>
        <div className='productRow__container'>
        <div className='productRow'>
        {displayedProducts.map((prod) => (
            <Product
            prodId={prod.Id}
            prodDescr={prod.Description}
            prodImg={prod.Image}
            prodOffer={prod.Offer}
            prodPrice={prod.Price}
            prodView={prod.View}
            prodRating={prod.Rating}
            key={prod.Id}
            />
        ))}
        </div>
        </div>
    </div>
    );
}

export default Home;