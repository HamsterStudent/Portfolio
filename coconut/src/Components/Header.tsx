import { useEffect, useState } from "react";
import { FullScreenHandle } from "react-full-screen";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Guestbook from "../Pages/Guestbook";
import {
  displayContactAtom,
  displayGuestbookAtom,
  displayLauncherAtom,
  displayThemeAtom,
} from "../atom";
import { useSetRecoilState } from "recoil";

const Nav = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(props) => props.theme.windowBg};
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.7px;
  z-index: 1;
  .active {
    background-color: #252525;
    color: white;
    img {
      transform: none;
      filter: invert(100%);
    }
  }
`;

const Logo = styled.div`
  width: 120.7px;
  display: flex;
  align-items: center;
  border-right: 0.7px dotted;
  img {
    height: 5px;
    transform: rotate(180deg);
    margin-left: 10px;
  }
`;

const Dropdown = styled.div`
  width: 120px;
  border-right: dotted 0.7px;
  box-sizing: border-box;
  position: absolute;
  top: 20px;
  z-index: 200;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  padding: 0 10px;
  border: dotted 0.7px;
  background: ${(props) => props.theme.windowBg};
`;

function Header({ enter }: FullScreenHandle) {
  const setIsGuestbook = useSetRecoilState(displayGuestbookAtom);
  const setIsContact = useSetRecoilState(displayContactAtom);
  const setIsTheme = useSetRecoilState(displayThemeAtom);
  const setIsLauncher = useSetRecoilState(displayLauncherAtom);
  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });
  let time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minute = String(time.getMinutes()).padStart(2, "0");
  const [clock, setClock] = useState(hours + ":" + minute);
  const [date, setDate] = useState("00/00");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let time = new Date();
    const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    setDate(week[time.getDay() - 1] + " " + time.getDate());
  }, []);

  const Timer = setInterval(() => {
    setClock(hours + ":" + minute);
  }, 30000);

  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <>
      <Nav>
        {menu ? (
          <>
            <Logo onClick={toggleMenu} className={menu ? "active" : undefined}>
              SeedMiner
              <img src={`img/arrow.png`} alt="" />
            </Logo>
            <Dropdown>
              <Item
                onClick={() => {
                  setIsLauncher(true);
                  toggleMenu();
                }}
              >
                Launcher
              </Item>
              <Item
                onClick={() => {
                  setIsTheme(true);
                  toggleMenu();
                }}
              >
                Theme
              </Item>
              <Item
                onClick={() => {
                  setIsContact(true);
                  toggleMenu();
                }}
              >
                Contact
              </Item>
              <Item
                onClick={() => {
                  setIsGuestbook(true);
                  toggleMenu();
                }}
              >
                Guestbook
              </Item>
            </Dropdown>
          </>
        ) : (
          <Logo onClick={toggleMenu} className={menu ? "active" : undefined}>
            SeedMiner
            <img src={`img/arrow.png`} alt="" />
          </Logo>
        )}

        <Right>
          {isDesktop ? <Item onClick={enter}>fullscreen</Item> : null}
          <Item>{clock}</Item>
          <Item>{date}</Item>
        </Right>
      </Nav>
      <Guestbook />
    </>
  );
}

export default Header;
