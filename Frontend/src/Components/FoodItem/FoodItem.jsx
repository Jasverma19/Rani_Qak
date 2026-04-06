
import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { FiPlus, FiMinus } from "react-icons/fi";
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({id, name, price, image, description }) => {


  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt="" />
        {!cartItems[id]
          ? <FiPlus className="add-icon"
            onClick={() => addToCart(id)}
          />
          : <div className="food-item-counter">
            <FiMinus className='minus'
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <FiPlus className='add'
              onClick={() => addToCart(id)}
            />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.star} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className='food-item-price'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem

