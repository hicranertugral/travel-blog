import React from "react";

const Heading = ({bgColor, color, title}) => {
 const styling = {
    backgroundColor : bgColor,
    color : color,
    
 }
  return (
    <div>
      <h1 style={styling}>{title}</h1>
    </div>
  );
};
export default Heading;
