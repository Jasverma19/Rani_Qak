// Navbar

import React, { useContext, useState } from 'react';
import './navbar.css';
import { FiSearch, FiMenu } from "react-icons/fi";
import { FaBasketShopping } from "react-icons/fa6";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("menu");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { getTotalCartAmount } = useContext(StoreContext);


  return (
    <div className='navbar'>

      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>

      <ul className={`navbar-menu ${mobileOpen ? "open" : ""}`}>
        <Link to='/' onClick={() => { setMenu("home"); setMobileOpen(false); }} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => { setMenu("menu"); setMobileOpen(false); }} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => { setMenu("mobile-app"); setMobileOpen(false); }} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => { setMenu("contact-us"); setMobileOpen(false); }} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
      </ul>

      <div className="navbar-right">
        <FiSearch />

        <div className='navbar-search-icon'>
          <Link to='/cart'> <FaBasketShopping /> </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
        <FiMenu className='menu-icon' onClick={() => setMobileOpen(!mobileOpen)} />
      </div>
    </div>
  );
};

export default Navbar

// Navbar Component is completed.
