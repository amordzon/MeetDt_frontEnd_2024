import React from "react";
import { HorizontalSplitter } from "../model";
import useRenderElement from "../hooks/useRenderElement";

const HorizontalSplitterComponent: React.FC<HorizontalSplitter> = ({
  elements,
}) => {
  return (
    <div className="horizontal-splitter">
      {elements.map((element) => useRenderElement(element))}
    </div>
  );
};

export default HorizontalSplitterComponent;
