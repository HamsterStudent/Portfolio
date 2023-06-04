import React, { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Container, Bar } from "./pages.style";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { highestZIndexAtom } from "../atom";

function Guestbook() {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
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
      defaultPosition={{ x: 30, y: 150 }}
    >
      <Container windowWidth={`${400}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">bar</Bar>
        <div>helloWorld</div>
      </Container>
    </Draggable>
  );
}

export default Guestbook;
