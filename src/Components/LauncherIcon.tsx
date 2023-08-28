import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ToolsAlertAtom, windowDisplayAtom } from "../recoil/atom";

const IconWrap = styled.div`
  padding: 10px 0;
  width: 16.6%;
  text-align: center;
  box-shadow: -1px -1px 0px 0px inset,
    rgba(255, 255, 255, 0.3) 1px 1px 0px 0px inset;
  p {
    text-align: center;
  }
  img {
    width: 50%;
    object-fit: contain;
  }
`;

interface ILauncherIcon {
  name: string;
  index: number;
}

const LauncherIcon = ({ name, index }: ILauncherIcon) => {
  const setIsDisplay = useSetRecoilState(windowDisplayAtom);
  const [toolsEnter, setToolsEnter] = useRecoilState(ToolsAlertAtom);
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: { innerText },
    } = e;
    if (innerText === "resume") {
      setIsDisplay((cur) => {
        return { ...cur, Resume: true };
      });
    } else if (innerText === "Coding") {
      setIsDisplay((cur) => {
        return { ...cur, Coding: true };
      });
    } else if (innerText === "Blog") {
      setIsDisplay((cur) => {
        return { ...cur, Blog: true };
      });
    } else if (innerText === "Tools") {
      setIsDisplay((cur) => {
        return { ...cur, Tools: true };
      });
      setToolsEnter(false);
    } else if (innerText === "About") {
      setIsDisplay((cur) => {
        return { ...cur, About: true };
      });
    }
  };
  const [countIndex, setCountIndex] = useState(-1);
  return (
    <IconWrap
      className={`${name === "Tools" && toolsEnter ? "active" : ""} ${
        countIndex === index && "pressed"
      }`}
      key={index}
      onClick={(e) => {
        onClick(e);
      }}
      onMouseDown={() => {
        setCountIndex(index);
      }}
      onMouseUp={() => {
        setCountIndex(-1);
      }}
    >
      <img src={`img/${name}.png`} alt={name} />
      <p>{name}</p>
    </IconWrap>
  );
};

export default LauncherIcon;
