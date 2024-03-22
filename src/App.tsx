import * as React from "react";
import "./style.css";
import LayoutComponent from "./components/LayoutComponent";
import useGetData from "./hooks/useGetData";
import DataContext from "./DataContext";

export default function App() {
  // load definition here
  const { data, setData } = useGetData();
  return (
    <DataContext.Provider value={{ data, setData }}>
      {data && (
        <LayoutComponent title={data.title} rootElement={data.rootElement} />
      )}
    </DataContext.Provider>
  );
}
