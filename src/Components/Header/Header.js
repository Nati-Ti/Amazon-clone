import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import HeaderProp from './HeaderProp'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/stateProvider';

function Header() {

    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className='Header'>
            <Link to='/' className='Header__logo'>
                <img src='https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png' alt='amazon logo'/>
            </Link>

            <HeaderProp smallText='Deliver to' largeText='United States Minor' icon='true' order='Header--textButton__wrapper' />



            <div className='Header--searchBar'>
                <Form.Select className="SearchBar__buttonSelect" >
                        <option>All</option>
                        <option value="Kids">Kids</option>
                        <option value="Men's">Men's</option>
                        <option value="Women's">Women's</option>
                </Form.Select>

                <InputGroup className='searchBar__inputParent'> 
                    <Form.Control className='searchBar__input'
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1" />    
                </InputGroup>

                <Button className='SearchBar__searchButton'>
                    <SearchIcon/>
                </Button>
            </div>

            <div className='Header__language'>
                <button className='language__button'>
                    <img className='language__button__logo' src='https://freepngimg.com/download/logo/127389-logo-american-flag-picture-free-download-png-hd.png' alt='US flag logo'/>
                <strong>EN</strong>
                <ArrowDropDownOutlinedIcon className='language__buttonIcon' fontSize='small' />
                </button>
            </div>

            <Link to='/Login' >
                <HeaderProp smallText='Hello, sign in' largeText='Account & Lists' order='Header--textButton__wrapper2'/>
            </Link>
            <HeaderProp smallText='Returns' largeText='& Orders' order='Header--textButton__wrapper3'/>
            <Link to='/Checkout' className='Header__shoppingCart' >
            
                <div className='shoppingCart'>
                    <p>{cart.length}</p>
                    <ShoppingCartOutlinedIcon className='shoppingCart__icon' fontSize="large"/>    
                </div>
                
                <div className='shoppingCart__text'><br/>Cart</div>
            
            </Link>
        </div>
    )
}

export default Header