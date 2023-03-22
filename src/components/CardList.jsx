import React from "react";
import Card from "./Card";

const CardList = ({ travels }) => {
  return (
    <div>
      {travels.map((travel) => (
        <Card key={travel.id} travelData={travel} />
      ))}
    </div>
  );
};

export default CardList;
