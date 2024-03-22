import React from "react";
import { TextTile } from "../model";

const TextTileComponent: React.FC<TextTile> = ({
  title,
  text,
  color,
  elementKey,
}) => {
  return (
    <div className={`text-tile ${color}`} id={elementKey}>
      <h4>{title}</h4>
      <div>{text}</div>
    </div>
  );
};

export default TextTileComponent;
