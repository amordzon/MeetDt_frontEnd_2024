import React from "react";
import { ButtonTile } from "../model";

const ButtonTileComponent: React.FC<ButtonTile> = ({ text, action }) => {
  return <button>{text}</button>;
};

export default ButtonTileComponent;
