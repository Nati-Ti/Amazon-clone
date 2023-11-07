import React from 'react'
import { Link } from 'react-router-dom'
import './BuyPackages.css'

function BuyPackages( {Title, Image, Url, PackageOfOne ,  Title1, Title2, Title3, Title4, Image1, Image2, Image3, Image4}) {
    return (
        <div className='buyPackages'>
            <div className='packages__wrapper'>

                <div className='package__title'>
                    {Title}
                </div>
                {/* <div className='package__image'>
                    <img src={Image} alt={Title}/>
                </div> */}

                {PackageOfOne ? 
                <div className='package__image'>
                    <img src={Image} alt={Title}/>
                </div> :

                (
                <div className='packageOfFour__image'>

                    <div className='row1'>
                        <div className='packageOne'>
                            <img src={Image1} alt={Title1}/>
                            <p>{Title1}</p>
                        </div>
                        
                        <div className='packageOne'>
                            <img src={Image2} alt={Title2}/>
                            <p>{Title2}</p>
                        </div>
                    </div>

                    <div>
                        <div className='row2'>
                            <div className='packageOne'>
                                <img src={Image3} alt={Title3}/>
                                <p>{Title3}</p>
                            </div>
                            
                            <div className='packageOne'>
                                <img src={Image4} alt={Title4}/>
                                <p>{Title4}</p>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                <Link className='package__url' to={Url}>
                    Shop now
                </Link>

            </div>
        </div>
    )
}

export default BuyPackages



// export function Buy4Packages({Image1, Title1}) {
//     return (
//         <div className='packageOne'>
//             <img src={Image1} alt={Title1}/>
//             <p>{Title1}</p>
//         </div>
//     )
// }