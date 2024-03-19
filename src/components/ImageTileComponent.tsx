import React from "react";
import { ImageTile } from "../model";

const ImageTileComponent: React.FC<ImageTile> = ({ title, source }) => {
  return <img title={title} src={source} />;
};

export default ImageTileComponent;
