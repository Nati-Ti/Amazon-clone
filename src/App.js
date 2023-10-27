import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NavBar from './Components/Nav/NavBar';
import Checkout from './Components/CheckoutPage/Checkout';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/Checkout' element={
        <>
          <Header />  
          <NavBar />
          <Checkout />
        </>
      } />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={
        <>
          <Header />  
          <NavBar />
          <Home />
        </>
      } />
      </Routes>
      
    </div>
  );
}

export default App;
