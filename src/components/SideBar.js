import React from 'react'
import Category from './FilterPanel/Category'
import Cuisine from './FilterPanel/Cuisine';
import PriceRange from './FilterPanel/PriceRange';
import Rating from './FilterPanel/Rating';

function SideBar({
  category,
  handleCategory,
  price,
  handlePrice,
  rating,
  handleRating,
  cuisines,
  handleChecked

}) {
  return (
    <div>
      <div className="input-box">
        <p className="label">Category</p>
        <Category category={category} handleCategory={handleCategory} />
      </div>

      <div className="input-box">
        <p className="label">Cuisine</p>
        <Cuisine cuisines={cuisines} handelChangeChecked = {handleChecked} />
      </div>

      <div className="input-box">
        <p className="label">Price Range</p>
        <PriceRange price={price} handleChangePrice={handlePrice} />
      </div>

      <div className="input-box">
        <p className="label">Rating</p>
        <Rating rating={rating} handleChangeRating={handleRating} />
      </div>
    </div>
  );
}

export default SideBar