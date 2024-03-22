import React from "react";
import { ElementsType } from "../model";
import TextTileComponent from "../components/TextTileComponent";
import ImageTileComponent from "../components/ImageTileComponent";
import ButtonTileComponent from "../components/ButtonTileComponent";
import HorizontalSplitterComponent from "../components/HorizontalSplitterComponent";
import VerticalSplitterComponent from "../components/VerticalSplitterComponent";

const useRenderElement = (element: ElementsType) => {
  switch (element.type) {
    case "textTile":
      return (
        <TextTileComponent
          title={element.title}
          text={element.text}
          color={element.color}
          elementKey={element.elementKey}
          type={element.type}
          key={element.elementKey}
        />
      );
    case "imageTile":
      return (
        <ImageTileComponent
          title={element.title}
          source={element.source}
          type={element.type}
          elementKey={element.elementKey}
          key={element.elementKey}
        />
      );
    case "buttonTile":
      return (
        <ButtonTileComponent
          text={element.text}
          action={element.action}
          type={element.type}
          elementKey={element.elementKey}
          key={element.elementKey}
        />
      );
    case "horizontalSplitter":
      return (
        <HorizontalSplitterComponent
          elements={element.elements}
          type={element.type}
          elementKey={element.elementKey}
          key={element.elementKey}
        />
      );
    case "verticalSplitter":
      return (
        <VerticalSplitterComponent
          elements={element.elements}
          type={element.type}
          elementKey={element.elementKey}
          key={element.elementKey}
        />
      );
  }
};

export default useRenderElement;
