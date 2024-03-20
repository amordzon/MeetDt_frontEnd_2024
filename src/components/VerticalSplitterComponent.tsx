import React from "react";
import { VerticalSplitter } from "../model";
import useRenderElement from "../hooks/useRenderElement";

const VerticalSplitterComponent: React.FC<VerticalSplitter> = ({
  elements,
  elementKey,
}) => {
  return (
    <div className="vertical-splitter" id={elementKey}>
      {elements.map((element) => useRenderElement(element))}
    </div>
  );
};

export default VerticalSplitterComponent;
