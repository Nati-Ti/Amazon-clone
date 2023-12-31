import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NavBar from './Components/Nav/NavBar';
import Checkout from './Components/CheckoutPage/Checkout';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/Context/stateProvider';
import { auth } from './Components/Login/firebase';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Footer from './Components/Footer/Footer';
import { loadStripe } from '@stripe/stripe-js';
import Payment from './Components/CheckoutPage/Payment';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders/Orders';

const promise = loadStripe('pk_test_51O7kkAGlAOBS4r9MuYdxTIHk2hIzz6P36MPGcjAIkE3xiVGSI9yTLDQAuzDV74H5llm446WI5BCrylpq1aGKbFIO00f3AjTQyu');

function App() {


  const[{cart, user}, dispatch] = useStateValue();
  useEffect(() =>{
    onAuthStateChanged(auth, (authUser) => {
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []); 

  return (
    <div className="App">
      
      <Routes>
        <Route path='/Checkout' element={
          <>
            <Header />  
            <NavBar />
            <Checkout />
            <Footer />
          </>
        } />

        <Route path='/Payment' element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        } />

        <Route path='/Orders' element={
          <>
            <Header />
            <Orders />
            <Footer />
          </>
        } />

        <Route path='/Login' element={<Login />} />

        <Route path='/' element={
          <>
            <Header />  
            <NavBar />
            <Home />
            <Footer />
          </>
        } />

      </Routes>
      
    </div>
  );
}

export default App;
