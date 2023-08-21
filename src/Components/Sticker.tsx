import React, { useEffect } from "react";
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { IStickerTypes, ToolsAlertAtom, collectSticker } from "../recoil/atom";

type ITool = {
  name: string;
  setSricker?: React.Dispatch<React.SetStateAction<boolean>>;
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

const Card = styled.div`
  position: absolute;
  display: inline-block;
  padding: 5px;
  animation: ${animation} 0.3s ease-in-out forwards;
`;

const Sticker = ({ name, setSricker }: ITool) => {
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
    >
      <img src={`img/${name}.png`} alt={`${name}`} />
    </Card>
  );
};

export default Sticker;
