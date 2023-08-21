import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { collectSticker } from "../recoil/atom";
import styled from "styled-components";
import ModalWindow from "../Components/ModalWindow";

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
  const [cardList, setCardList] = useRecoilState(collectSticker);

  const allComplete = () => {
    console.log("!!!!congratulation!!!!");
  };

  const cardFlip = (e: React.MouseEvent) => {
    console.log("flip!", e.currentTarget);
    const {
      currentTarget: { children },
    } = e;
  };
  return (
    <ModalWindow
      width={400}
      windowName="Tools"
      defaultPosition={{ x: 300, y: 200 }}
    >
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
    </ModalWindow>
  );
};

export default Tools;
