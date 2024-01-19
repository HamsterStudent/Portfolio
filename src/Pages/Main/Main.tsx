import styled, { ThemeProvider, keyframes } from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDisplayAtom } from "../../recoil/atom";
import Sticker from "../../shared/components/Sticker";
import MainIcon from "../../shared/components/MainIcon";
import Launcher from "../Launcher";
import Resume from "../resume";
import Guestbook from "../Guestbook";
import ChooseTheme from "../ThemeScreen";
import Blog from "../Blog";
import Dungeon from "../Dungeon";
import Project from "../Project/Project";
import Tools from "../Tools";
import ProdListPost from "../CodingPosts/ProdListPost";
import SessionPost from "../CodingPosts/SessionPost";
import ProxyPost from "../CodingPosts/ProxyPost";
import MapRefact from "../CodingPosts/MapRefact";
import About from "../About";
import MusicPlayer from "../musicPlayer/MusicPlayer";

const marquee = keyframes`
  0% { left: 0; }
  100% { left: -90%; }
`;

export default function Main() {
  const isDisplay = useRecoilValue(windowDisplayAtom);
  const stickerName = "typescript";

  return (
    <>
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
      {isDisplay["Resume"] ? <Resume /> : null}
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
    </>
  );
}
