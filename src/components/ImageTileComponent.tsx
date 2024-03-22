import React from "react";
import { ImageTile } from "../model";

const ImageTileComponent: React.FC<ImageTile> = ({
  title,
  source,
  elementKey,
}) => {
  return <img title={title} src={source} id={elementKey} />;
};

export default ImageTileComponent;
