import * as React from "react";
import "./style.css";
import axios from "axios";
import LayoutComponent from "./components/LayoutComponent";
import { Layout } from "./model";

export default function App() {
  // load definition here
  const [data, setData] = React.useState<Layout>();

  const fetchData = async () => {
    try {
      const response = await axios.get<Layout>("http://localhost:3000/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      {data && (
        <LayoutComponent title={data.title} rootElement={data.rootElement} />
      )}
    </>
  );
}
