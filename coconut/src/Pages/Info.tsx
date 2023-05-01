import { useRef } from "react";
import styled from "styled-components";

const InfoWrap = styled.div`
  width: 50vw;
  height: 50vh;
  background: plum;
  cursor: pointer;
`;

interface IPosition {
  x: number;
  y: number;
  e: React.DragEvent<HTMLDivElement>;
}

function setTranslate({ x, y, e }: IPosition) {
  e.currentTarget.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
}

function Info() {
  let initialX;
  let initialY;
  let currentX;
  let currentY;

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    console.log("X: " + e.clientX + " | Y: " + e.clientY);
    console.log(e.currentTarget);
    // e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
  };
  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    // e.preventDefault();
    if (e.type == "drag") {
      console.log(e);
      e.currentTarget.style.left = `${e.clientX}px`;
      e.currentTarget.style.top = `${e.clientY}px`;
      initialX = e.clientX;
      initialY = e.clientY;

      let x = e.clientX;
      let y = e.clientY;
      setTranslate({ x, y, e });
    }
  };
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("X: " + e.clientX + " | Y: " + e.clientY);
    console.log(e.currentTarget);
  };
  return (
    <InfoWrap
      draggable
      onDragStart={onDragStart}
      onDrag={onDrag}
      // onDragEnd={onDragEnd}
    ></InfoWrap>
  );
}

export default Info;
