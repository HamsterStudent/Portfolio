import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Bar, Container } from "./pages.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { highestZIndexAtom, themeAtom } from "../atom";

const ChooseTheme = () => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setTheme = useSetRecoilState(themeAtom);

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
    <Draggable
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: 150, y: 50 }}
    >
      <Container windowWidth={`${300}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">bar</Bar>
        <ul>
          <li
            onClick={() => {
              setTheme("darkTheme");
            }}
          >
            darkTheme
          </li>
          <li>lightTheme</li>
          <li>hamsterTheme</li>
        </ul>
      </Container>
    </Draggable>
  );
};

export default ChooseTheme;
