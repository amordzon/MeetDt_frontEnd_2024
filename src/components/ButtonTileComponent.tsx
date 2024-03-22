import React, { useCallback } from "react";
import DataContext from "../DataContext";
import useFindElementByIdAndUpdate from "../hooks/useFindElementByIdAndUpdate";
import { ButtonTile, Action, ElementsType } from "../model";

const ButtonTileComponent: React.FC<ButtonTile> = ({
  text,
  action,
  elementKey,
}) => {
  const handleClick = useFindElementByIdAndUpdate();
  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    handleClick(action);
  };
  return (
    <div>
      <button id={elementKey} onClick={onClickHandler}>
        {text}
      </button>
    </div>
  );
};

export default ButtonTileComponent;
