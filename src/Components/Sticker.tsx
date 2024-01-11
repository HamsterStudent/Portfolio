import React, { useCallback, useEffect, useState } from "react";
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components";
import { IStickerTypes, ToolsAlertAtom, collectSticker } from "../recoil/atom";
import useDisplaySticker from "../Hooks/useDisplaySticker";

type ITool = {
  name: string;
  width: number;
  defaultPosition: { x: number; y: number };
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
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;

  }
  100%{
    opacity: 0;

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
  &.fadeIn {
    animation: ${fadeIn} 0.3s ease-in-out forwards;
  }
  &.fadeOut {
    animation: ${fadeOut} 0.3s ease-in-out forwards;
  }
`;

export default function Sticker({ name, width, defaultPosition }: ITool) {
  const { displaySticker, getSticker } = useDisplaySticker(name);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (displaySticker) setMount(true);
  }, [displaySticker]);

  return (
    <>
      {mount && (
        <Card
          onClick={() => {
            getSticker(name);
          }}
          className={`${displaySticker ? "fadeIn" : "fadeOut"}`}
          width={width}
          top={defaultPosition.y}
          left={defaultPosition.x}
        >
          <img src={`assets/sticker/${name}.png`} alt={`${name}`} />
        </Card>
      )}
    </>
  );
}
