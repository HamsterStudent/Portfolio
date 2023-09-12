import React, { useEffect } from "react";
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { IStickerTypes, ToolsAlertAtom, collectSticker } from "../recoil/atom";

type ITool = {
  name: string;
  width: number;
  defaultPosition: { x: number; y: number };
  setSricker?: React.Dispatch<React.SetStateAction<boolean>>;
};

type ICard = {
  width: number;
  top: number;
  left: number;
};

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform:rotate(15deg);
  }
  50% {
    transform:rotate(-15deg);
  }
  100%{
    transform:rotate(0deg);
  }
`;

const Card = styled.div<ICard>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  display: inline-block;
  padding: 5px;
  animation: ${animation} 0.3s ease-in-out forwards;
  width: ${({ width }) => width}px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Sticker = ({ name, width, defaultPosition, setSricker }: ITool) => {
  const [cards, setCards] = useRecoilState(collectSticker);
  const setToolsEnter = useSetRecoilState(ToolsAlertAtom);

  const onClick = (iconName: string) => {
    setCards(
      cards.map((card: IStickerTypes) => {
        return card.name === iconName ? { ...card, isGet: true } : card;
      }),
    );
    setSricker!(false);
  };

  useEffect(() => {
    return () => {
      console.log("unmount");
      setToolsEnter(true);
    };
  }, []);

  return (
    <Card
      onClick={() => {
        onClick(name);
      }}
      width={width}
      top={defaultPosition.y}
      left={defaultPosition.x}
    >
      <img src={`img/sticker/${name}.png`} alt={`${name}`} />
    </Card>
  );
};

export default Sticker;
