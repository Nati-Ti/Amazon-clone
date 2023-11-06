import React from 'react'
import './Footer.css'
import { FooterLowerLinks, FooterUpperLinks } from './FooterLinkJSON'
import FooterProp from './FooterProp'
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    return (
        <div className="footer">
            <button className='button__toTop' onClick={scrollToTop}>Back to top</button>
            <div className='upper__footer'>
                <div className="internal__links">
                    <div>
                        <strong>Get to Know Us</strong>
                        <FooterProp UppLinks={FooterUpperLinks.column1} nameClass1='uColumn_1' />
                    </div>
                    <div>
                        <strong>Make Money with Us</strong>
                        <FooterProp UppLinks={FooterUpperLinks.column2} nameClass1='uColumn_2' />
                    </div>
                    <div>
                        <strong>Amazon Payment Products</strong>
                        <FooterProp UppLinks={FooterUpperLinks.column3} nameClass1='uColumn_3' />
                    </div>
                    <div>
                        <strong>Let Us Help You</strong>
                        <FooterProp UppLinks={FooterUpperLinks.column4} nameClass1='uColumn_4' />
                        </div>
                </div>
            </div>

            <div >
                <div className='middle__buttons'>
                    <Link to='/' className='logo__wrapper' >
                        <img className='footer__logo' src='https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png' alt='amazon logo'/>
                    </Link>

                    <button className='lang__button'><LanguageIcon fontSize='small' />English</button>
                    <button className='currency__button'>
                        <strong>$ </strong> <div> USD - U.S. Dollar</div></button>
                    <button 
                    className='flag__button'>
                        <img className='language__button__logo' src='https://freepngimg.com/download/logo/127389-logo-american-flag-picture-free-download-png-hd.png' alt='US flag logo'/>
                        United States 
                    </button>
                </div>
            </div>


            <div className='lower__footer'>
                <div className='external__links'>
                    <FooterProp Links={FooterLowerLinks.column1} nameClass2='column_1' />
                    <FooterProp Links={FooterLowerLinks.column2} nameClass2='column_2'/>
                    <FooterProp Links={FooterLowerLinks.column3} nameClass2='column_3'/>
                    <FooterProp Links={FooterLowerLinks.column4} nameClass2='column_4'/>
                    <FooterProp Links={FooterLowerLinks.column5} nameClass2='column_5'/>
                    <FooterProp Links={FooterLowerLinks.column6} nameClass2='column_6'/>
                    <FooterProp Links={FooterLowerLinks.column7} nameClass2='column_7'/>
                </div>
            </div>

            <div className="bottom_terms">
                <div className="conditionAndTerms">
                <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088&ref_=footer_cou">Conditions of Use </a> <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496&ref_=footer_privacy">Privacy Notice</a> <a href="https://www.amazon.com/privacyprefs?ref_=footer_iba">Your Ads Privacy Choices</a>
                <img className='privacyIcon' src='https://signup.heroku.com/assets/privacy-c5c3a463f9246ecae06befec31bebc5d387cfcabafac948d38e08ffd5c73ea06.png' alt='privacy icon'/>
                </div>
                <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                
            </div>

        </div>
    )
}

export default Footer