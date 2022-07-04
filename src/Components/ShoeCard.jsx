import React from "react";
import "./shoesCard.css";

const ShoeCard = ({ item }) => {
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} className="as">
      <div>
        <img
          data-cy="shoe-card-image"
          src={item.image}
          alt="image"
          className="img"
        />
      </div>
      <div>
        <div data-cy="shoe-name">{item.name}</div>
        <div data-cy="shoe-category">{item.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
