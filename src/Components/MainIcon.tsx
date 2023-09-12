import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dungeon from "../Pages/Dungeon";
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
`;
const IconLi = styled.li`
  width: 25%;
  height: auto;
  font-size: 14px;
  text-align: center;
  /* border: dotted 0.7px; */
  margin-top: 10px;
`;
const IconImgWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* margin-bottom: 7px; */
  img {
    width: 60%;
    object-fit: contain;
  }
`;

const IconTitle = styled.p``;
const MainIcon = () => {
  const [icons, setIcons] = useState<string[]>([]);
  const [isLauncher, setIsLauncher] = useRecoilState(displayLauncherAtom);
  const [isDisplay, setIsDisplay] = useRecoilState(windowDisplayAtom);
  const currentheme = useRecoilValue(themeAtom);

  useEffect(() => {
    setIcons(["Launcher", "Guestbook", "Dungeon", "Design", "Tools"]);
  }, []);
  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const clickIconText = e.currentTarget.innerText;
    console.log(clickIconText);
    if (clickIconText === "Launcher") {
      setIsLauncher(true);
    } else if (clickIconText === "Guestbook") {
      setIsDisplay((cur) => {
        return { ...cur, Guestbook: true };
      });
    } else if (clickIconText === "Dungeon") {
      setIsDisplay((cur) => {
        return { ...cur, Dungeon: true };
      });
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
            >
              <IconImgWrap>
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
