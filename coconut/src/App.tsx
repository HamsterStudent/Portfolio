import React, { useRef, useState } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
// import Info from "./Pages/Info";

const Info = styled.div`
  width: 30vw;
  height: 30vh;
  background-color: plum;
  position: absolute;
`;

const ContainerWrap = styled.div`
  width: 100%;
  background-color: tomato;
`;

function App() {
  const container = useRef<HTMLDivElement>(null); // 드래그 할 영역 네모 박스 Ref
  const dragComponent = useRef<HTMLDivElement>(null); // // 움직일 드래그 박스 Ref
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 }); // 드래그 전 포지션값 (e.target.offset의 상대 위치)
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 }); // 실시간 커서위치인 e.client를 갱신하는값
  const [pos, setPos] = useState({ left: 0, top: 0 }); // 실제 drag할 요소가 위치하는 포지션값

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    // 고스트이미지 제거
    // var img = new Image();
    // img.src =
    //   "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    // e.dataTransfer.setDragImage(img, 0, 0);

    const temp = { ...initialPos };
    temp["x"] = e.currentTarget.offsetLeft;
    temp["y"] = e.currentTarget.offsetTop;
    console.log("initialPosTemp", temp);
    setInitialPos(temp);

    const clientTemp = { ...clientPos };
    clientTemp["x"] = e.clientX;
    clientTemp["y"] = e.clientY;
    setClientPos(clientTemp);
  };
  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const posTemp = { ...pos };
    posTemp["left"] = e.currentTarget.offsetLeft + e.clientX - clientPos.x;
    posTemp["top"] = e.currentTarget.offsetTop + e.clientY - clientPos.y;

    setPos(posTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);

    console.log(container.current?.clientWidth);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const isInsideDragArea = (e: any) => {
    if (e.clientX < 0 || e.clientY < 0) {
      return false;
    } else {
      return true;
    }
  };
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    // if (!isInsideDragArea(e)) {
    //   const posTemp = { ...pos };
    //   posTemp["left"] = initialPos.x;
    //   posTemp["top"] = initialPos.y;
    //   setPos(posTemp);
    // }
  };

  return (
    <div className="App">
      <Header />
      <ContainerWrap ref={container}>
        <Info
          ref={dragComponent}
          draggable
          onDragStart={(e) => onDragStart(e)}
          onDrag={(e) => onDrag(e)}
          onDragOver={(e) => onDragOver(e)}
          onDragEnd={(e) => onDragEnd(e)}
          style={{ left: pos.left, top: pos.top }}
        />
      </ContainerWrap>
    </div>
  );
}

export default App;
