import React from "react";
import { TextTile } from "../model";

const TextTileComponent: React.FC<TextTile> = ({ title, text, color }) => {
  return (
    <div className={color}>
      <h5>{title}</h5>
      <div>{text}</div>
    </div>
  );
};

export default TextTileComponent;
