import React from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import styled from "styled-components";
import { ICardTypes, collectError } from "../atom";

type IError = {
  name: string;
};

const Card = styled.div`
  background-color: #c23838;
  display: inline-block;
`;

const ErrorIcon = ({ name }: IError) => {
  const [cards, setCards] = useRecoilState(collectError);

  const onClick = () => {
    setCards(
      cards.map((card: ICardTypes) => {
        return card.name === name ? { ...card, isGet: true } : card;
      }),
    );
    console.log(cards);
  };
  return <Card onClick={onClick}>{name}</Card>;
};

export default ErrorIcon;
