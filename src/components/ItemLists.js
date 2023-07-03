import React from "react";
import { dataList } from "../constants/data";
import StarIcon from "@mui/icons-material/Star";

function ItemLists() {
  return (
    <div className="items-list">
      {dataList.map((items) => (
        <div key={items.id} className="card">
          <div className="card-image">
            <img src={require(`../${items.coverSrc}`)} alt={items.title} />
            <div className="rate">
              <StarIcon /> <span>{items.rating}</span>
            </div>
          </div>
          <div className="card-details">
            <div className="card-info">
              <label className="title">{items.title}</label>
              <label>{items.serviceTime}</label>
            </div>
            <div className="card-info">
              <label className="price"> {items.price}</label>
              <label>{items.deliveryFee}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemLists;
