import React from "react";

const Card = ({travelData}) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src = {travelData.image}
        alt="travel-img"
      />
      <div className="card-info">
        <h1 className="card-title">{travelData.title}</h1>
        <p className="card-desc">
          {travelData.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
