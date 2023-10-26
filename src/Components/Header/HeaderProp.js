import React from 'react'
import './Header.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function HeaderProp({smallText, largeText, icon, order}) {
    return (
        <div className={order}>
            <div className='Header__icon'>{icon ? <LocationOnOutlinedIcon /> : null}</div>
            <div>
                <div className='Header__smallText'>{smallText}</div>
                <div className='Header__largeText'><strong>{largeText}</strong></div>
            </div>
        </div>
    )
}

export default HeaderProp