import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  ToolsAlertAtom,
  themeAtom,
  windowDisplayAtom,
} from "../../recoil/atom";

const IconWrap = styled.div<{ currentheme: string; isDesktop: boolean }>`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 16.6%;
  width: ${(props) => (props.isDesktop ? "16.6%" : "25%")};

  text-align: center;
  box-shadow: -1px -1px 0px 0px inset,
    rgba(255, 255, 255, 0.3) 1px 1px 0px 0px inset;

  p {
    text-align: center;
    width: 100%;
    color: ${(props) => props.theme.textColor};
  }
  .imgWrap {
    width: 48%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

interface ILauncherIcon {
  name: string;
  index: number;
  isDesktop: boolean;
}

const LauncherIcon = ({ name, index, isDesktop }: ILauncherIcon) => {
  const setIsDisplay = useSetRecoilState(windowDisplayAtom);
  const [toolsEnter, setToolsEnter] = useRecoilState(ToolsAlertAtom);
  const currentheme = useRecoilValue(themeAtom);
  const [countIndex, setCountIndex] = useState(-1);
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: { textContent },
    } = e;
    if (textContent === name) {
      setIsDisplay((cur) => {
        return { ...cur, [name]: true };
      });
    }
  };
  return (
    <IconWrap
      className={`${countIndex === index && "pressed"}`}
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
      currentheme={currentheme.name}
      isDesktop={isDesktop}
    >
      <div className="imgWrap">
        <img src={`assets/theme/${currentheme.name}/${name}.png`} alt={name} />
      </div>
      <p>{name}</p>
    </IconWrap>
  );
};

export default LauncherIcon;
