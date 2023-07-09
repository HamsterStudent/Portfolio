import { Children, useEffect, useState } from "react";
import { FullScreenHandle, FullScreenProps } from "react-full-screen";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Guestbook from "../Pages/Guestbook";
import { displayGuestbookAtom, displayThemeAtom } from "../atom";
import { useSetRecoilState } from "recoil";

const Nav = styled.div`
  width: 100%;
  height: 20px;
  background-color: plum;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.7px;
  z-index: 1;
`;

const Logo = styled.div`
  width: 150px;
`;
const Dropdown = styled.div`
  width: 150px;
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
  background: plum;
`;

function Header({ enter }: FullScreenHandle) {
  const setIsdisplay = useSetRecoilState(displayGuestbookAtom);
  const setIsTheme = useSetRecoilState(displayThemeAtom);
  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });
  let time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minute = String(time.getMinutes()).padStart(2, "0");
  const [clock, setClock] = useState(hours + ":" + minute);
  const [date, setDate] = useState("00/00");

  useEffect(() => {
    let time = new Date();
    const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    setDate(week[time.getDay() - 1] + " " + time.getDate());
  }, []);

  const Timer = setInterval(() => {
    setClock(hours + ":" + minute);
  }, 30000);

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <>
      <Nav>
        {menu ? (
          <>
            <Logo onClick={toggleMenu}>Logo</Logo>
            <Dropdown>
              <Item
                onClick={() => {
                  setIsTheme(true);
                }}
              >
                Theme
              </Item>
              <Item>Contact</Item>
              <Item
                onClick={() => {
                  setIsdisplay(true);
                }}
              >
                Guestbook
              </Item>
            </Dropdown>
          </>
        ) : (
          <Logo onClick={toggleMenu}>Hamster</Logo>
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
