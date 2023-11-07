import React, { useEffect, useState } from 'react'
import './Home.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Banners from './BannerJSON';

function Banner() {

    const [banners, setBanners] = useState([]);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setBanners(Banners);
        startInterval();
        return () => clearInterval(intervalId);
    }, []);

    const previousBanner = () => {
        clearInterval(intervalId); 

        setCurrentBannerIndex((prevIndex) => (prevIndex === 0 ? Banners.length - 1 : prevIndex - 1));

        startInterval();
    };

    const nextBanner = () => {
        clearInterval(intervalId);
        
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % Banners.length);
        
        startInterval();
    };

    const startInterval = () => {
        const id = setInterval(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % Banners.length);
        }, 5000);
        setIntervalId(id);
    };


    return (
        <div className='Home--Banner'>
            <div className='banner__buttons'>
                <button onClick={previousBanner} className='banner__buttonPrev'>
                    <ArrowBackIosNewIcon fontSize='large'/>
                </button>
                <button onClick={nextBanner} className='banner__buttonNext'>
                    <ArrowForwardIosIcon fontSize='large'/>
                </button>
            </div>
            
            <a href={banners[currentBannerIndex]?.Url}>
                <img className='Banner__img' src={banners[currentBannerIndex]?.Image} alt="banner"/> 
            </a>
            
        </div>
    )
}

export default Banner