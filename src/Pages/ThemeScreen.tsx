import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { useRecoilState, useSetRecoilState } from "recoil";
import { themeAtom } from "../recoil/atom";
import {
  darkTheme,
  lightTheme,
  summerTheme,
  cherryBlossom,
  defaultTheme,
} from "../style/theme";
import styled from "styled-components";
import ModalWindow from "../Components/ModalWindow";

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
  button {
    margin-top: 10px;
    background-color: transparent;
    padding: 7px 10px;
    border: solid 0.7px;
  }
  .clicked {
    background-color: #252525;
    color: #fff;
    border-color: #252525;
  }
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
  const [selected, setSelected] = useState("");
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [chooseTheme, setChooseTheme] = useState(theme);
  const [btnClick, setBtnClick] = useState(false);

  useEffect(() => {
    setSelected(`${theme.name}`);
  }, []);
  const themeClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const {
      currentTarget: { textContent },
    } = e;
    if (textContent === "defaultTheme") {
      setChooseTheme(defaultTheme);
    } else if (textContent === "darkTheme") {
      setChooseTheme(darkTheme);
    } else if (textContent === "lightTheme") {
      setChooseTheme(lightTheme);
    } else if (textContent === "summerTheme") {
      setChooseTheme(summerTheme);
    } else if (textContent === "cherryBlossom") {
      setChooseTheme(cherryBlossom);
    }
    setSelected(`${textContent}`);
  };

  const themeApply = () => {
    setTheme(chooseTheme);
  };
  return (
    <ModalWindow
      width={300}
      windowName="Theme"
      defaultPosition={{ x: 150, y: 50 }}
    >
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
          <button
            className={btnClick ? "clicked" : undefined}
            onMouseDown={() => {
              setBtnClick(true);
            }}
            onMouseUp={() => {
              setBtnClick(false);
            }}
            onClick={themeApply}
          >
            Apply
          </button>
        </Wallpaper>
      </WallpaperWrap>
    </ModalWindow>
  );
};

export default ChooseTheme;
