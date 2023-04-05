import { useEffect, useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 20px;
  background-color: plum;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.7px;
`;

const Dropdown = styled.div``;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  padding: 0 10px;
  border: dotted 0.7px;
  background: plum;
`;

function Header() {
  let time = new Date();
  const [clock, setClock] = useState(time.getHours() + ":" + time.getMinutes());
  const [date, setDate] = useState("00/00");
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    setDate(week[time.getDay() - 1] + " " + time.getDate());
  }, []);

  const Timer = setInterval(() => {
    let time = new Date();
    setClock(time.getHours() + ":" + time.getMinutes());
    console.log("dasd");
  }, 60000);

  return (
    <Nav>
      <Dropdown>
        Logo
        <Item>Theme</Item>
        <Item>Contact</Item>
      </Dropdown>
      <Right>
        <Item>fullscreen</Item>
        <Item>{clock}</Item>
        <Item>{date}</Item>
      </Right>
    </Nav>
  );
}

export default Header;
