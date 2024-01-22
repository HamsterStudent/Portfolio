import { useEffect, useState } from "react";
import { FullScreenHandle } from "react-full-screen";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Guestbook from "../../Pages/Guestbook";
import { displayLauncherAtom, windowDisplayAtom } from "../../recoil/atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";

const Nav = styled.div`
  color: ${(props) => props.theme.textColor};
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
  width: 100px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  border-right: 0.7px dotted;
  p {
    line-height: 38px;
  }
  img {
    height: 5px;
    transform: rotate(180deg);
    margin-left: 10px;
  }
`;

const Dropdown = styled.div`
  width: 100px;
  border-right: dotted 0.7px;
  box-sizing: border-box;
  position: absolute;
  top: 20px;
  z-index: 200;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    border-right: dotted 0.7px;
    border-left: dotted 0.7px;
    border-bottom: 0;
  }
`;

const Item = styled.div`
  padding: 0 10px;
  border-bottom: dotted 0.7px;
  background: ${(props) => props.theme.windowBg};
`;

function Header({ enter }: FullScreenHandle) {
  const setIsLauncher = useSetRecoilState(displayLauncherAtom);
  const [isDisplay, setIsDisplay] = useRecoilState(windowDisplayAtom);

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
    if (week[time.getDay() - 1] === undefined) {
      setDate(week[6] + " " + time.getDate());
    } else {
      setDate(week[time.getDay() - 1] + " " + time.getDate());
    }
  }, [date]);

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
              <p>SeedMiner</p>
              <img src={`assets/icon/arrow.png`} alt="" />
            </Logo>
            <Dropdown>
              <Item
                onClick={(e) => {
                  const {
                    currentTarget: { textContent },
                  } = e;
                  setIsDisplay((cur) => {
                    return { ...cur, [`${textContent}`]: true };
                  });
                  toggleMenu();
                }}
              >
                Launcher
              </Item>
              <Item
                onClick={() => {
                  setIsDisplay((cur) => {
                    return { ...cur, Theme: true };
                  });
                  toggleMenu();
                }}
              >
                Theme
              </Item>
              <Item
                onClick={() => {
                  setIsDisplay((cur) => {
                    return { ...cur, Guestbook: true };
                  });
                  toggleMenu();
                }}
              >
                Guestbook
              </Item>
              <Item>
                <Link to={"/project"} onClick={toggleMenu}>
                  Project
                </Link>
              </Item>
            </Dropdown>
          </>
        ) : (
          <Logo onClick={toggleMenu} className={menu ? "active" : undefined}>
            <p>SeedMiner</p>
            <img src={`assets/icon/arrow.png`} alt="" />
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
