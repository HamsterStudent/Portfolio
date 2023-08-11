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
  padding: 5px;
`;

const ErrorIcon = ({ name }: IError) => {
  const [cards, setCards] = useRecoilState(collectError);

  const onClick = (iconName: string) => {
    setCards(
      cards.map((card: ICardTypes) => {
        return card.name === iconName ? { ...card, isGet: true } : card;
      }),
    );
  };

  return (
    <Card
      onClick={() => {
        onClick(name);
      }}
    >
      <img src={`img/${name}.png`} alt={`${name}`} />
      {name}
    </Card>
  );
};

export default ErrorIcon;
