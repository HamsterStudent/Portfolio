import styled from "styled-components";
import MarkdownRenderer from "../../Components/MarkdownRenderer";
import ModalWindow from "../../Components/ModalWindow";
import { Cute, Hamster } from "./PostList";

const MarkdownWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const ProdList = () => {
  return (
    <ModalWindow
      width={300}
      windowName="ProdList"
      defaultPosition={{ x: 30, y: 50 }}
      resize={true}
    >
      <MarkdownWrap>
        <MarkdownRenderer>{Cute}</MarkdownRenderer>
      </MarkdownWrap>
    </ModalWindow>
  );
};

export default ProdList;
