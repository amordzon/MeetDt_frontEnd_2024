import React from "react";
import { ImageTile } from "../model";

const ImageTileComponent: React.FC<ImageTile> = ({ title, source }) => {
  return (
    <div>
      <img title={title} src={source} />
    </div>
  );
};

export default ImageTileComponent;
