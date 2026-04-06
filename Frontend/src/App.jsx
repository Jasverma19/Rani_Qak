
import React, { useState } from 'react';
import Navbar from './Components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
          <Navbar setShowLogin={setShowLogin} />
        <div className='app'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Order' element={<PlaceOrder />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
