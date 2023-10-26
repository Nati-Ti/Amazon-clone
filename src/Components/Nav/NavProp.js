import React from 'react'
import './Nav.css'
import Nav from 'react-bootstrap/Nav';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




function NavProp({linkName, linkUrl, dropDown}) {
    return (
        <>            
            {dropDown ?
            <div className='dropDown'> 
                <div href={linkUrl} >
                    {linkName}           
                </div>
                <ArrowDropDownIcon className='dropDown__icon' />
            </div>
            :  
            <Nav.Link href={linkUrl} className='NavLink'>{linkName}</Nav.Link>}                   
        </>
    )
}

export default NavProp