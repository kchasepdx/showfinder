import React from "react";

function AnswerBubble(props) {
  return (
    <div onClick={props.onClick} Name={props.Name} className={props.className}>
      {props.Text}
    </div>
  );
}

export default AnswerBubble;
