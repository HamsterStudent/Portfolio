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
  return (
    <Nav>
      <Dropdown>
        Logo
        <Item>Theme</Item>
        <Item>Contact</Item>
      </Dropdown>
      <Right>
        <Item>fullscreen</Item>
        <Item>clock</Item>
        <Item>date</Item>
      </Right>
    </Nav>
  );
}

export default Header;
