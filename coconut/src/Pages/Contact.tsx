import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Bar, Container } from "./pages.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { displayContactAtom, highestZIndexAtom } from "../atom";

const Blog = () => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(displayContactAtom);

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
      defaultPosition={{ x: 300, y: 200 }}
    >
      <Container windowWidth={`${400}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">
          <p>Contact</p>
          <div
            onClick={() => {
              setIsdisplay(false);
            }}
          ></div>
        </Bar>
        <div>Contact</div>
      </Container>
    </Draggable>
  );
};

export default Blog;
