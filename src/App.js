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
import CheckoutItems from './Components/CheckoutPage/CheckoutItems';

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
        <Route path='/CheckoutItems' element={<CheckoutItems />} />
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
