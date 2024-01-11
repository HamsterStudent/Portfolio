import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import Header from "./Components/Header";
import styled, { ThemeProvider, keyframes } from "styled-components";
import Launcher from "./Pages/Launcher";
import MainIcon from "./Components/MainIcon";
import Guestbook from "./Pages/Guestbook";
import ChooseTheme from "./Pages/ThemeScreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  displayLauncherAtom,
  musicPlayAtom,
  themeAtom,
  windowDisplayAtom,
} from "./recoil/atom";
import Resume from "./Pages/resume";
import Blog from "./Pages/Blog";
import Dungeon from "./Pages/Dungeon";
import Project from "./Pages/Project";
import Tools from "./Pages/Tools";
import About from "./Pages/About";
import useDisplaySticker from "./Hooks/useDisplaySticker";
import Sticker from "./Components/Sticker";
import { darkTheme } from "./style/theme";
import ProdListPost from "./Pages/CodingPosts/ProdListPost";
import SessionPost from "./Pages/CodingPosts/SessionPost";
import ProxyPost from "./Pages/CodingPosts/ProxyPost";
import MapRefact from "./Pages/CodingPosts/MapRefact";
import MusicPlayer from "./Pages/MusicPlayer";
import ReactPlayer from "react-player";

const marquee = keyframes`
  0% { left: 0; }
  100% { left: -90%; }
`;
const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background-color: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
  .marquee {
    margin: 10px auto;
    width: 90%;
    overflow: hidden;
    position: relative;
    height: 20px;
    background-color: #0056a8;
    border: solid 1px;
    div {
      display: block;
      width: 180%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      animation: ${marquee} 10s linear infinite;
      span {
        float: left;
        width: 50%;
        font-size: 16px;
      }
    }
  }
`;

function App() {
  const isLauncher = useRecoilValue(displayLauncherAtom);
  const isDisplay = useRecoilValue(windowDisplayAtom);
  const handle = useFullScreenHandle();
  const currentTheme = useRecoilValue(themeAtom);
  const stickerName = "typescript";

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <FullScreen handle={handle}>
          <Header {...handle} />
          <AppWrap>
            {/* <div className="marquee">
              <a
                href="https://respected-honey-7eb.notion.site/8f80be93ee194cff9a99b188a1c6651f?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <span>
                    Welcome to my Website!! Shortcut to Notion Resume. Please
                    Click Me 🍈
                  </span>
                  notion 이력서 페이지로 가시려면 이곳을 눌러주세요.🍈
                </div>
              </a>
            </div> */}
            <Sticker
              width={220}
              name={stickerName}
              defaultPosition={{ x: 100, y: 250 }}
            />
            <MainIcon />
            {isDisplay["Launcher"] ? <Launcher /> : null}
            {isDisplay["resume"] ? <Resume /> : null}
            {isDisplay["Guestbook"] ? <Guestbook /> : null}
            {isDisplay["Theme"] ? <ChooseTheme /> : null}
            {isDisplay["Blog"] ? <Blog /> : null}
            {isDisplay["Dungeon"] ? <Dungeon /> : null}
            {isDisplay["Project"] ? <Project /> : null}
            {isDisplay["Tools"] ? <Tools /> : null}
            {isDisplay["ProdListPost"] ? <ProdListPost /> : null}
            {isDisplay["SessionPost"] ? <SessionPost /> : null}
            {isDisplay["ProxyPost"] ? <ProxyPost /> : null}
            {isDisplay["MapRefact"] ? <MapRefact /> : null}
            {isDisplay["About"] ? <About /> : null}
            {isDisplay["MusicPlayer"] ? <MusicPlayer /> : null}
          </AppWrap>
        </FullScreen>
      </ThemeProvider>
    </>
  );
}

export default App;
