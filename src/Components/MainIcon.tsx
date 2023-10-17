import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  displayLauncherAtom,
  themeAtom,
  windowDisplayAtom,
} from "../recoil/atom";

const MainIconWrap = styled.section`
  position: absolute;
  bottom: 0;
`;
const IconWrap = styled.ul`
  width: 300px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap-reverse;
  margin: 15px;
  .active {
    p {
      color: aqua;
      background-color: pink;
      display: inline-block;
    }
  }
`;
const IconLi = styled.li`
  width: 25%;
  height: auto;
  font-size: 14px;
  text-align: center;
  /* border: dotted 0.7px; */
  margin-top: 10px;
`;
const IconImgWrap = styled.div<{ currentheme: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* margin-bottom: 7px; */
  img {
    width: 50%;
    object-fit: contain;
  }
`;

const IconTitle = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const MainIcon = () => {
  const [icons, setIcons] = useState<string[]>([]);
  const setIsLauncher = useSetRecoilState(displayLauncherAtom);
  const setIsDisplay = useSetRecoilState(windowDisplayAtom);
  const currentheme = useRecoilValue(themeAtom);
  const [curname, setCurname] = useState("");

  useEffect(() => {
    setIcons(["Launcher", "Guestbook", "Dungeon", "MusicPlayer", "Tools"]);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const {
      currentTarget: { innerText, className },
    } = e;

    setCurname(innerText);

    if (className.indexOf("active") > -1) {
      if (innerText === "Launcher") {
        setIsLauncher(true);
        setCurname("");
      } else {
        setIsDisplay((cur) => {
          return { ...cur, [innerText]: true };
        });
        setCurname("");
      }
    }
  };

  return (
    <>
      <MainIconWrap>
        <IconWrap>
          {icons.map((icon) => (
            <IconLi
              key={icon}
              onClick={(e) => {
                onClick(e);
              }}
              className={curname === icon ? "active" : undefined}
            >
              <IconImgWrap currentheme={currentheme.name}>
                <img src={`img/theme/${currentheme.name}/${icon}.png`} alt="" />
              </IconImgWrap>
              <IconTitle>{icon}</IconTitle>
            </IconLi>
          ))}
        </IconWrap>
      </MainIconWrap>
    </>
  );
};

export default MainIcon;
