import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Bar, Container } from "./pages.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { displayDungeonAtom, highestZIndexAtom } from "../atom";
import ErrorIcon from "../Components/ErrorIcon";

const Dungeon = () => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(displayDungeonAtom);

  useEffect(() => {
    setZIndex(highestZIndex);
  }, []);

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  return (
    <Draggable bounds="parent" handle=".bar" defaultPosition={{ x: 30, y: 50 }}>
      <Container windowWidth={`${400}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">
          Dungeon
          <div
            onClick={() => {
              setIsdisplay(false);
            }}
          ></div>
        </Bar>
        <div>dungeon</div>
        <ErrorIcon itemName="hamster" />
      </Container>
    </Draggable>
  );
};

export default Dungeon;
