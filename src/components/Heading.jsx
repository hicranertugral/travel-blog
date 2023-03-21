import React from "react";

const Heading = ({ bgColor, color, title }) => {
  const styling = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <div>
      <h1 style={styling}>{title}</h1>
    </div>
  );
};

Heading.defaultProps = {
  title: "Default Heading",
  color: "#36b",
  bgColor: "#333",
};
export default Heading;
