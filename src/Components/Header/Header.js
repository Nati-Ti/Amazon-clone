import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import HeaderProp from './HeaderProp'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Header() {
    return (
        <div className='Header'>
            <div className='Header__logo'>
                <img src='https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png' alt='amazon logo'/>
            </div>

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
                    {/* <select className='language__buttonSelect' >
                        <option>EN</option>
                        <option value="Kids">Sp</option>
                        <option value="Men's">Fr</option>
                        <option value="Women's">Ar</option>
                </select> */}
                EN
                {/* <ArrowDropDownOutlinedIcon className='language__buttonIcon'/> */}
                </button>
            </div>

            <HeaderProp smallText='Hello, sign in' largeText='Account & Lists' order='Header--textButton__wrapper2'/>

            <HeaderProp smallText='Returns' largeText='& Orders' order='Header--textButton__wrapper3'/>

            <div className='Header__shoppingCart'>
                <div className='shoppingCart'>
                    <p>0</p>
                    <ShoppingCartOutlinedIcon className='shoppingCart__icon' fontSize="large"/>    
                </div>
                
                <div className='shoppingCart__text'><br/>Cart</div>
            </div>
        </div>
    )
}

export default Header



// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';

// function ButtonsExample() {
//   return (
//     <>
//       <InputGroup className="mb-3">
//           <Form.Select >
//             <option>All</option>
//             <option value="1">One</option>
//             <option value="2">Two</option>
//             <option value="3">Three</option>
//           </Form.Select>
        
//         <Form.Control
//           aria-label="Example text with button addon"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>

      
//     </>
//   );
// }

// // export default ButtonsExample;

// <select id="Search" name="SearchBar" className='searchBar__selectButton'>
//                     <option value="All Departments">All Departments</option>
//                     <option value="Boys">Boys</option>
//                     <option value="Women">Women</option>
//                     <option value="Accessories">Accessories</option>
//                 </select>

// <Button className="SearchBar__button"
//                     variant="outline-secondary" >
                        
//                     </Button>