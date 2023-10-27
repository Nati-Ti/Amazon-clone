import React from 'react'
import './Login.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='LoginPage'>
            <Link to='/'>
                <img className='login__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>
            <div className='login__signIn'>
                <h2 className='signIn__text'>Sign in</h2>
                <form>
                    <h4>E-mail </h4>
                    <input
                        className='signIn__email'
                        type="text"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />

                    <h4>Password</h4>
                    <input
                        className='signIn__password'
                        type="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>
                    <button
                        className='signIn__button'
                        type="submit"
                        // onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>
                
                <p className='signIn__agreeText'>By continuing, you agree to Amazon's <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Notice</a>.</p>
                <p className='needHelp_wrap'><ArrowRightIcon  className='needHelp__icon'/><a className='needHelp' href='#'>Need help?</a></p>
            </div>
            <div className='newToAmazon'>
                <hr className='horizontal-line'/>
                <p className='overlappingText'>New to Amazon?</p>
            </div>

            <button
            className='createAcc__button'
                        type="submit"
                        // onClick={signIn}
                    >
                        Create your Amazon account
            </button>
        </div>
    )
}

export default Login

// <div className='signIn__email'></div>
//                 <div className='signIn__password'></div>
//                 <button className='signIn__button'></button>