import React from "react";
import { VerticalSplitter } from "../model";
import useRenderElement from "../hooks/useRenderElement";

const VerticalSplitterComponent: React.FC<VerticalSplitter> = ({
  elements,
}) => {
  return (
    <div className="vertical-splitter">
      {elements.map((element) => useRenderElement(element))}
    </div>
  );
};

export default VerticalSplitterComponent;
