import React from 'react'
import './MiniBanner.css'


function MiniBanner() {
    return (
        <div className='MiniBannerPage'>
            <div className='MiniBanner'>
                <div className='miniBanner__image'>
                    <img src='https://m.media-amazon.com/images/G/01/EPSMarketingJRubyWebsite/2019/shop/Button-Update-3._CB601904601_.png' alt='amazon Pay'/>
                </div>
                <div className='miniBanner__text'>
                    <p>Special deals from Amazon Pay. </p>
                    <p> Get deals</p>
                </div>
            </div>
        </div>
    )
}

export default MiniBanner