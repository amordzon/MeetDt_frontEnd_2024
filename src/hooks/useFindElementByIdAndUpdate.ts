import { ElementsType, Action } from "./../model";
import React, { useCallback, useContext } from "react";
import DataContext from "../DataContext";

const useFindElementByIdAndUpdate = () => {
  const dataContext = useContext(DataContext);

  // find element by id and update it with action value
  const findElementByIdAndUpdate = useCallback(
    (currentElement: ElementsType, action: Action): ElementsType => {
      if (currentElement.elementKey === action.referenceElementKey) {
        return { ...currentElement, ...action.value };
      }

      if ("elements" in currentElement) {
        const updatedElements = currentElement.elements.map(
          (subElement: ElementsType) =>
            findElementByIdAndUpdate(subElement, action)
        );

        return { ...currentElement, elements: updatedElements };
      }

      return currentElement;
    },
    []
  );

  const handleClick = useCallback(
    (action: Action) => {
      if (dataContext?.data?.rootElement) {
        const updatedData = findElementByIdAndUpdate(
          dataContext?.data?.rootElement,
          action
        );
        dataContext?.setData({
          ...dataContext?.data,
          rootElement: updatedData,
        });
      }
    },
    [dataContext, findElementByIdAndUpdate]
  );

  return handleClick;
};

export default useFindElementByIdAndUpdate;
