import React from "react";

function Image(props) {
  return <img className="Images" src={props.source} alt={props.alt} />;
}

export default Image;
