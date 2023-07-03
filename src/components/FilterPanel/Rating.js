import React from 'react'
import { ratingList } from "../../constants/data";


function Rating() {
  return (
    <div className="rating-container">
      {ratingList.map((rating) => (
        <div key={rating.id} className='rating-box'>{rating.label}</div>
      ))}
    </div>
  );
}

export default Rating