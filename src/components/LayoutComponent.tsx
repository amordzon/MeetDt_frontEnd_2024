import React from "react";
import useRenderElement from "../hooks/useRenderElement";
import { Layout } from "../model";

const LayoutComponent: React.FC<Layout> = ({ title, rootElement }) => {
  const element = useRenderElement(rootElement);
  return (
    <div className="main">
      <h1>{title}</h1>
      <div className="content">
        <div className="inner-content">{element}</div>
      </div>
    </div>
  );
};

export default LayoutComponent;
