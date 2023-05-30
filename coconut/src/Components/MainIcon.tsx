import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Guestbook from "../Pages/Guestbook";
const MainIconWrap = styled.section`
  position: absolute;
  bottom: 0;
`;
const IconWrap = styled.ul`
  width: 320px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap-reverse;
`;
const IconLi = styled.li`
  width: 25%;
  height: auto;
  font-size: 14px;
  border: dotted 0.7px;
`;
const IconImgWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 7px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const IconTitle = styled.p``;
const MainIcon = () => {
  const [icons, setIcons] = useState<string[]>([]);
  const [isGuestbook, setIsGuestbook] = useState(false);
  useEffect(() => {
    setIcons(["Guestbook", "Dungeon", "Design", "Tools"]);
  }, []);
  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const clickIconText = e.currentTarget.innerText;
    console.log(clickIconText);
    if (clickIconText === "Guestbook") {
      setIsGuestbook(true);
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
                <img src={`img/Design.gif`} />
              </IconImgWrap>
              <IconTitle>{icon}</IconTitle>
            </IconLi>
          ))}
        </IconWrap>
      </MainIconWrap>
      {isGuestbook ? <Guestbook /> : null}
    </>
  );
};

export default MainIcon;
