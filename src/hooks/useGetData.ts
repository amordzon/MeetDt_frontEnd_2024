import { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../model";

const useGetData = () => {
  const [data, setData] = useState<Layout | null>(null); // Ustawiamy początkową wartość na null, ponieważ dane będą ładowane asynchronicznie

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Layout>("http://localhost:3000/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useGetData;
