import React from "react";
import { Layout } from "../model";

const LayoutComponent: React.FC<Layout> = ({ title, rootElement }) => {
  return (
    <div className="main">
      <h1>{title}</h1>
      <div className="content">{/* {rootElement} */}</div>
    </div>
  );
};

export default LayoutComponent;
