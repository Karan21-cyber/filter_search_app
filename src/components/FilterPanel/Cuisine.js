import React from 'react'


function Cuisine({ cuisines, handelChangeChecked }) {
  return (
    <div>
      {cuisines.map((data) => (
        <div key={data.id} className="cuisine-box">
          <p>{data.label}</p>
          <input
            type="checkbox"
            onChange={(e) => handelChangeChecked(data.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Cuisine