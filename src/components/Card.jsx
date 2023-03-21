import React from "react";

const Card = ({title, image, text}) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src = {image}
        alt="travel-img"
      />
      <div className="card-info">
        <h1 className="card-title">{title}</h1>
        <p className="card-desc">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
