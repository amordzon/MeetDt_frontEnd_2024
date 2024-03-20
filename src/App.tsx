import * as React from "react";
import "./style.css";
import LayoutComponent from "./components/LayoutComponent";
import useGetData from "./hooks/useGetData";

export default function App() {
  // load definition here
  const data = useGetData();

  return (
    <>
      {data && (
        <LayoutComponent title={data.title} rootElement={data.rootElement} />
      )}
    </>
  );
}
