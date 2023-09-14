import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { collectSticker } from "../recoil/atom";
import styled from "styled-components";
import ModalWindow from "../Components/ModalWindow";

const CardWrap = styled.section`
  font-family: "galmuri11";
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: white;
  border: solid 0.7px;
  margin: 5px;
  h3 {
    width: 100%;
    text-align: center;
    background-color: aqua;
    border-bottom: solid 0.7px;
  }
`;
const CardPlace = styled.div`
  width: 120px;
  /* height: 150px; */
  margin-bottom: 10px;
`;

const Card = styled.div`
  text-align: center;
  position: relative;
  transition: 0.4s;
  div {
    width: 100%;
    height: 100px;
    img {
      width: 85%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const DanceFloor = styled.div`
  width: 100%;
  height: 150px;
  background-color: pink;
`;

const Tools = () => {
  const [cardList, setCardList] = useRecoilState(collectSticker);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let count = 0;
    cardList.map((x) => {
      if (!x.isGet) {
        count++;
      }
    });
    if (count > 0) {
      setIsComplete(false);
    } else {
      setIsComplete(true);
      allComplete();
    }
  }, [cardList]);

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
      <CardWrap>
        <h3>8 items</h3>
        {cardList.map((card, index) => (
          <CardPlace key={index}>
            {card.isGet ? (
              <Card onClick={cardFlip}>
                <div>
                  <img src={`${card.fruit}`} alt={`${card.name}`} />
                </div>
                <p>{card.describe}</p>
              </Card>
            ) : null}
          </CardPlace>
        ))}
        <DanceFloor>
          {isComplete === false
            ? "find more sticker"
            : "!!!!congratulation!!!!"}
        </DanceFloor>
      </CardWrap>
    </ModalWindow>
  );
};

export default Tools;
