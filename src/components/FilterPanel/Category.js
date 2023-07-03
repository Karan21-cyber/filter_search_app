import React from "react";
import { categoryList } from "../../constants/data";

function Category({ category, handleCategory }) {
  
  return (
    <div>
      {categoryList.map((category) => (
        <div
          key={category.id}
          onClick={(e) => handleCategory(category.value)}
          className="category-btn"
        >
          {category.label}
        </div>
      ))}
    </div>
  );
}

export default Category;
