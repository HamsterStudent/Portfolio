import { useRef } from "react";
import styled from "styled-components";

const InfoWrap = styled.div`
  width: 50vw;
  height: 50vh;
  background: plum;
  cursor: pointer;
`;

function Info() {
  let initialX;
  let initialY;
  let currentX;
  let currentY;

  const temp = useRef(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    console.log("X: " + e.clientX + " | Y: " + e.clientY);
    console.log(e.currentTarget);
    // e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
  };
  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
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
      onDragEnd={onDragEnd}
      ref={temp}
    ></InfoWrap>
  );
}

export default Info;
