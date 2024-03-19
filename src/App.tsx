import * as React from "react";
import "./style.css";
import axios from "axios";

export default function App() {
  // load definition here
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://localhost:3000/rootElement");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return <></>;
}
