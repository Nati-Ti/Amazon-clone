import React from 'react'
import { Link } from 'react-router-dom'
import './BuyPackages.css'

function BuyPackages( {Title, Image, Url,PackagesOfFour,  Title1, Title2, Title3, Title4, Image1, Image2, Image3, Image4}) {
    return (
        <div className='buyPackages'>
            <div className='packages__wrapper'>

                <div className='package__title'>
                    {Title}
                </div>
                {/* <div className='package__image'>
                    <img src={Image} alt={Title}/>
                </div> */}

                {!PackagesOfFour ? 
                <div className='package__image'>
                    <img src={Image} alt={Title}/>
                </div> :

                (<div className='packageOfFour__image'>
                    <div className='row1'>
                        <Buy4Packages 
                        Image={PackagesOfFour[0].Image1} 
                        Title={PackagesOfFour[0].Title1} />

                        <Buy4Packages 
                        Image={PackagesOfFour[1].Image2} 
                        Title={PackagesOfFour[1].Title2} />

                        <div className='row2'>
                            <Buy4Packages Image={PackagesOfFour.Image3} Title={PackagesOfFour.Title3} />
                            <Buy4Packages Image={PackagesOfFour.Image4} Title={PackagesOfFour.Title4} />
                            </div>
                        </div>
                </div>
                )}

                <Link className='package__url' to={Url}>Shop now
                </Link>

            </div>
        </div>
    )
}

export default BuyPackages



export function Buy4Packages({Image1, Title1}) {
    return (
        <div className='packageOne'>
            <img src={Image1} alt={Title1}/>
            <p>{Title1}</p>
        </div>
    )
}