import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { collectError } from "../atom";

const Card = styled.div`
  background-color: #c23838;
  display: inline-block;
`;

type IType = {
  itemName: String;
};

const ErrorIcon = ({ itemName }: IType) => {
  const [card, setCard] = useRecoilState(collectError);

  const onClick = () => {
    if (itemName === "hamster") {
      const data = {
        name: itemName,
      };
      setCard([...card, data]);
    }
    console.log(card);
  };
  return <Card onClick={onClick}>{itemName}</Card>;
};

export default ErrorIcon;
