import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import Products, { Products2 } from '../Product/ProductsJSON';
import BuyPackages from './BuyPackages';
import Packages1, { Packages2 } from './PackagesJSON';
import Banner from './Banner';

function Home() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [productCount, setProductCount] = useState(0);

    const [packagesCount, setPackagesCount] = useState(0);

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
            setPackagesCount(4);
        } else if (windowWidth < 1200 && windowWidth >= 1080) {
            setProductCount(5);
            setPackagesCount(4);
        } else if (windowWidth < 1080 && windowWidth >= 992) {
            setProductCount(4);
            setPackagesCount(3);
        } else if (windowWidth < 992) {
            setProductCount(4);
            setPackagesCount(3);
        }
    }, [windowWidth]);

    const displayedProducts = Products.slice(0, productCount);
    const displayedProducts2 = Products2.slice(0, productCount);
    const displayedPackages = Packages1.slice(0, packagesCount);
    const displayedPackages2 = Packages2.slice(0, packagesCount);

    return (
    <div className='Home'>
        
        <Banner />

        <div className='packagesInRow'>
            {displayedPackages.map((pack, index) => {
                return pack.PackageOfOne ? (
                    <BuyPackages
                    Title={pack.Title}
                    Image={pack.Image}
                    Url={pack.Url}
                    PackageOfOne = {pack.PackageOfOne}
                    key={index}
                    />
                    
                ) : (
                    <BuyPackages
                    Title={pack.Title}
                    Url={pack.Url}
                    Image1={pack.PackagesOfFour.Image1}
                    Image2={pack.PackagesOfFour.Image2}
                    Image3={pack.PackagesOfFour.Image3}
                    Image4={pack.PackagesOfFour.Image4}
                    Title1={pack.PackagesOfFour.Title1}
                    Title2={pack.PackagesOfFour.Title2}
                    Title3={pack.PackagesOfFour.Title3}
                    Title4={pack.PackagesOfFour.Title4}
                    PackageOfOne = {pack.PackageOfOne}
                    key={index}
                    />
            );
            })}    
        </div>
        
        <div className='packagesInRow'>
            {displayedPackages2.map((pack, index) => {
                return pack.PackageOfOne ? (
                    <BuyPackages
                    Title={pack.Title}
                    Image={pack.Image}
                    Url={pack.Url}
                    PackageOfOne = {pack.PackageOfOne}
                    key={index}
                    />
                    
                ) : (
                    <BuyPackages
                    Title={pack.Title}
                    Url={pack.Url}
                    Image1={pack.PackagesOfFour.Image1}
                    Image2={pack.PackagesOfFour.Image2}
                    Image3={pack.PackagesOfFour.Image3}
                    Image4={pack.PackagesOfFour.Image4}
                    Title1={pack.PackagesOfFour.Title1}
                    Title2={pack.PackagesOfFour.Title2}
                    Title3={pack.PackagesOfFour.Title3}
                    Title4={pack.PackagesOfFour.Title4}
                    PackageOfOne = {pack.PackageOfOne}
                    key={index}
                    />
            );
            })}    
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

        <div className='productRow__container'>
            <div className='productRow'>
            {displayedProducts2.map((prod) => (
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