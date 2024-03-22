import { Layout } from "./model";
import React, { Dispatch, SetStateAction } from "react";

interface DataContextType {
  data: Layout | null;
  setData: Dispatch<SetStateAction<Layout | null>>;
}

const DataContext = React.createContext<DataContextType | null>(null);

export default DataContext;
