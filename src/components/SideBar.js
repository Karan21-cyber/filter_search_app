import React from 'react'
import Category from './FilterPanel/Category'
import Cuisine from './FilterPanel/Cuisine';
import PriceRange from './FilterPanel/PriceRange';
import Rating from './FilterPanel/Rating';

function SideBar() {
  return (
    <div>
      <div className="input-box">
        <p className="label">Category</p>
        <Category />
      </div>

      <div className="input-box">
        <p className="label">Cuisine</p>
        <Cuisine />
      </div>

      <div className="input-box">
        <p className="label">Price Range</p>
        <PriceRange />
      </div>

      <div className="input-box">
        <p className="label">Rating</p>
        <Rating />
      </div>
    </div>
  );
}

export default SideBar