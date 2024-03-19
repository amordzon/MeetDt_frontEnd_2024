import React from "react";
import { ButtonTile } from "../model";

const ButtonTileComponent: React.FC<ButtonTile> = ({ text, action }) => {
  return (
    <div>
      <button>{text}</button>;
    </div>
  );
};

export default ButtonTileComponent;
