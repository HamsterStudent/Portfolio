import Header from "./shared/components/Header";
import styled, { ThemeProvider, keyframes } from "styled-components";
import Launcher from "./Pages/Launcher";
import MainIcon from "./shared/components/MainIcon";
import Guestbook from "./Pages/Guestbook";
import ChooseTheme from "./Pages/ThemeScreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useRecoilValue } from "recoil";
import {
  displayLauncherAtom,
  themeAtom,
  windowDisplayAtom,
} from "./recoil/atom";
import Router from "./router/router";

const marquee = keyframes`
  0% { left: 0; }
  100% { left: -90%; }
`;
const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background: ${(props) =>
    props.theme.name === "summerTheme"
      ? `url(${props.theme.backgroundColor})`
      : `${props.theme.backgroundColor}`};
  background-size: cover;
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
  const handle = useFullScreenHandle();
  const currentTheme = useRecoilValue(themeAtom);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <FullScreen handle={handle}>
          <Header {...handle} />
          <AppWrap>
            <Router />
          </AppWrap>
        </FullScreen>
      </ThemeProvider>
    </>
  );
}

export default App;
