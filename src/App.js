import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NavBar from './Components/Nav/NavBar';
import Checkout from './Components/CheckoutPage/Checkout';

function App() {
  return (
    <div className="App">
      
      <Header />  
      <NavBar />
      <Routes>
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
