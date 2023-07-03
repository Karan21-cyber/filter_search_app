import React, { useState } from "react";
import { categoryList } from "../../constants/data";

function Category() {
  const [category, setCategory] = useState();

  console.log(category);

  return (
    <div>
      
      {categoryList.map((category) => (
        <div key={category.id} onClick={(e) => setCategory(category.value)} className="category-btn">
          {category.label}
        </div>
      ))}

    </div>
  );
}

export default Category;
