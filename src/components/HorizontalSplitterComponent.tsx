import React from "react";
import { HorizontalSplitter } from "../model";
import useRenderElement from "../hooks/useRenderElement";

const HorizontalSplitterComponent: React.FC<HorizontalSplitter> = ({
  elements,
  elementKey,
}) => {
  return (
    <div className="horizontal-splitter" id={elementKey}>
      {elements.map((element) => useRenderElement(element))}
    </div>
  );
};

export default HorizontalSplitterComponent;
