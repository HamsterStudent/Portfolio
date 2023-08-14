import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Bar, Container } from "./pages.style";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { collectTool, displayToolsAtom, highestZIndexAtom } from "../atom";
import styled from "styled-components";

const CardWrap = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const CardPlace = styled.div`
  width: 120px;
  height: 150px;
  margin-bottom: 10px;
  /* border: 0.7px dotted; */
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
`;
const CardFront = styled.div`
  /*
  background-color: pink;
  width: 100%;
  height: 100%; */
  img {
    width: 100%;
    position: absolute;
    :last-child {
      width: 50%;
      top: 50%;
      left: 50%;
    }
  }
`;
const CardBack = styled.div``;
const DanceFloor = styled.div`
  width: 100%;
  height: 150px;
`;
const Tools = () => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(displayToolsAtom);
  const [cardList, setCardList] = useRecoilState(collectTool);

  useEffect(() => {
    setZIndex(highestZIndex);
  }, []);

  const allComplete = () => {
    console.log("!!!!congratulation!!!!");
  };

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  const cardFlip = (e: React.MouseEvent) => {
    console.log("flip!", e.currentTarget);
    const {
      currentTarget: { children },
    } = e;
  };

  return (
    <Draggable
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: 300, y: 200 }}
    >
      <Container windowWidth={`${400}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">
          <p>Tools</p>
          <div
            onClick={() => {
              setIsdisplay(false);
            }}
          ></div>
        </Bar>
        <div>
          <CardWrap>
            {cardList.map((card, index) => (
              <CardPlace key={index}>
                {card.isGet ? (
                  <Card onClick={cardFlip}>
                    <CardFront>
                      {card.name}
                      <div>
                        <img src={`${card.fruit}`} alt={`${card.name}`} />
                        <img src={`${card.img}`} alt={`${card.name}`} />
                      </div>
                    </CardFront>
                    {/* <CardBack>{card.describe}</CardBack> */}
                  </Card>
                ) : null}
              </CardPlace>
            ))}
          </CardWrap>
        </div>
        <DanceFloor></DanceFloor>
      </Container>
    </Draggable>
  );
};

export default Tools;
