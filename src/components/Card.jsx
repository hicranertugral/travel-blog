import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://cdn2.vectorstock.com/i/1000x1000/64/81/vintage-pop-art-of-travel-bus-vector-14116481.jpg"
        alt="travel-img"
      />
      <div className="card-info">
        <h1 className="card-title">Travel</h1>
        <p className="card-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          expedita, nemo omnis ex voluptatum laudantium, incidunt officiis
          corporis odio explicabo animi dolore quia, alias eaque natus ut
          debitis aspernatur! Excepturi beatae porro fugiat quos, explicabo
          dolorem dolor adipisci quod dignissimos rem aperiam, repellat suscipit
          iste assumenda earum, pariatur asperiores sequi?
        </p>
      </div>
    </div>
  );
};

export default Card;
