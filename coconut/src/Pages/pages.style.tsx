import styled from "styled-components";

interface IContainer {
  zIndex: number;
}
export const Container = styled.div<IContainer>`
  width: 400px;
  height: auto;
  background-color: ${(props) => props.theme.windowBg};
  box-shadow: ${(props) => props.theme.windowShadow};
  margin: 0;
  position: absolute;
  z-index: ${(props) => props.zIndex};
`;
export const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(props) => props.theme.windowBarColor};
`;
