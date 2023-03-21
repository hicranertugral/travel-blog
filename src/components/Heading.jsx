import React from "react";

const Heading = (props) => {
 console.log(props);
 const styling = {
    backgroundColor : props.bgColor,
    color : props.color,
    
 }
  return (
    <div>
      <h1 style={styling}>{props.title}</h1>
    </div>
  );
};
export default Heading;
