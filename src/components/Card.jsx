import React from "react";
import Emoji from "./Emoji";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Card;
