import MarkdownRenderer from "../../Components/MarkdownRenderer";
import ModalWindow from "../../Components/ModalWindow";
import { Hamster } from "./PostList";
import { Resizable } from "re-resizable";

const ProdList = () => {
  return (
    <ModalWindow
      width={300}
      windowName="ProdList"
      defaultPosition={{ x: 30, y: 50 }}
      resize={true}
    >
      001
    </ModalWindow>
  );
};

export default ProdList;
