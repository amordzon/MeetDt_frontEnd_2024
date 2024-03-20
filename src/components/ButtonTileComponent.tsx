import React from "react";
import { ButtonTile } from "../model";

const ButtonTileComponent: React.FC<ButtonTile> = ({
  text,
  action,
  elementKey,
}) => {
  return (
    <div>
      <button id={elementKey}>{text}</button>
    </div>
  );
};

export default ButtonTileComponent;
