import React from 'react'
import { ratingList } from "../../constants/data";


function Rating({handleChangeRating}) {
  return (
    <div className="rating-container">
      {ratingList.map((rating) => (
        <div key={rating.id} className='rating-box' onClick={() => handleChangeRating(rating.value)}>{rating.label}</div>
      ))}
    </div>
  );
}

export default Rating