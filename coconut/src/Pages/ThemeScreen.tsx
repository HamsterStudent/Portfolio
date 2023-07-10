import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Bar, Container } from "./pages.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { highestZIndexAtom, themeAtom } from "../atom";
import {
  darkTheme,
  lightTheme,
  summerTheme,
  cherryBlossom,
  defaultTheme,
} from "../theme";
import { displayThemeAtom } from "../atom";
import styled from "styled-components";

const ScreenWrap = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreviewScreen = styled.div`
  width: 200px;
  height: 150px;
  border: 0.7px solid;
`;

const WallpaperWrap = styled.section`
  display: flex;
  padding: 15px 0;
  justify-content: center;
`;

const Wallpaper = styled.div`
  position: relative;
  padding: 15px 10px 10px 10px;
  width: 90%;
  box-shadow: inset -1px -1px 0 0, inset 1px 1px 0 0 rgba(255, 255, 255, 0.3),
    1px 1px 0 0 rgba(255, 255, 255, 0.3);
  p {
    position: absolute;
    top: -8px;
    padding: 0 7px 0 5px;
    font-size: 14px;
    background-color: ${(props) => props.theme.windowBg};
  }
  div {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const ThemeList = styled.ul`
  background-color: white;
  width: 80%;
  height: 80px;
  box-shadow: inset -1px -1px 0 0, inset 1px 1px 0 0 rgba(255, 255, 255, 0.3),
    1px 1px 0 0 rgba(255, 255, 255, 0.3);
  font-size: 14px;
  overflow-y: scroll;

  div {
    width: 10px;
    height: 10px;
    border: 0.7px dotted;
    display: inline-block;
  }

  li:last-child {
    margin-bottom: 8px;
  }
  .active {
    span {
      background-color: ${(props) => props.theme.windowBg};
      border: 1px dotted;
      color: ${(props) => props.theme.invertTextColor};
    }
  }
`;

const U = styled.span`
  text-decoration: underline;
`;

const ChooseTheme = () => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [theme, setTheme] = useRecoilState(themeAtom);
  const setIsdisplay = useSetRecoilState(displayThemeAtom);

  useEffect(() => {
    setZIndex(highestZIndex);
    setSelected(`${theme.name}`);
  }, []);

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  const themeClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const {
      currentTarget: { textContent },
    } = e;
    if (textContent === "defaultTheme") {
      setTheme(defaultTheme);
    } else if (textContent === "darkTheme") {
      setTheme(darkTheme);
    } else if (textContent === "lightTheme") {
      setTheme(lightTheme);
    } else if (textContent === "summerTheme") {
      setTheme(summerTheme);
    } else if (textContent === "cherryBlossom") {
      setTheme(cherryBlossom);
    }
    setSelected(`${textContent}`);
  };

  return (
    <Draggable
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: 150, y: 50 }}
    >
      <Container windowWidth={`${300}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">
          <div
            onClick={() => {
              setIsdisplay(false);
            }}
          ></div>
        </Bar>
        <ScreenWrap>
          <PreviewScreen></PreviewScreen>
        </ScreenWrap>
        <WallpaperWrap>
          <Wallpaper>
            <p>Wallpaper</p>
            <div>
              <U>S</U>elete an HTML Document or a picture:
            </div>
            <ThemeList>
              <li
                onClick={themeClick}
                className={selected === "defaultTheme" ? "active" : undefined}
              >
                <div></div>
                <span>defaultTheme</span>
              </li>
              <li
                onClick={themeClick}
                className={selected === "darkTheme" ? "active" : undefined}
              >
                <div></div>
                <span>darkTheme</span>
              </li>
              <li
                onClick={themeClick}
                className={selected === "lightTheme" ? "active" : undefined}
              >
                <div></div>
                <span>lightTheme</span>
              </li>
              <li
                onClick={themeClick}
                className={selected === "summerTheme" ? "active" : undefined}
              >
                <div></div>
                <span>summerTheme</span>
              </li>
              <li
                onClick={themeClick}
                className={selected === "cherryBlossom" ? "active" : undefined}
              >
                <div></div>
                <span>cherryBlossom</span>
              </li>
            </ThemeList>
          </Wallpaper>
        </WallpaperWrap>
      </Container>
    </Draggable>
  );
};

export default ChooseTheme;
