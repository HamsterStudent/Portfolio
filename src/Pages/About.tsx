import styled from "styled-components";
import ModalWindow from "../shared/components/ModalWindow";
import Sticker from "../shared/components/Sticker";
import { useMediaQuery } from "react-responsive";

interface IDisplay {
  isDesktop: boolean;
}

const ContentBox = styled.div<IDisplay>`
  height: ${(props) => (props.isDesktop ? "auto" : "80vh")};
  overflow-y: ${(props) => (props.isDesktop ? "none" : "scroll")};
  padding: 5px;
  line-height: 20px;
  font: 500 1.4rem "Source Sans 3";
  color: ${(props) => props.theme.textColor};
  :nth-child(2) {
    margin-right: 0;
  }
  a {
    :hover {
      color: #e4e4e4;
    }
  }
`;

const Keyword = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 15px;
  li {
    width: 30%;
    text-align: center;
    padding: 15px 10px;
    border-radius: 50%;
    border: solid 1px ${(props) => props.theme.textColor};
    display: inline-block;
    margin-top: 5px;
  }
`;

const AboutText = styled.div`
  border: solid 1px;
  padding: 10px;
  p {
    word-break: keep-all;
    line-height: 26px;
    letter-spacing: -0.5px;
    margin-bottom: 5px;
  }
`;

const SelectWrap = styled(AboutText)`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const Select = styled.div`
  width: 45%;
  .imageWrap {
    width: 30px;
    height: 30px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  p {
    a:hover {
      color: ${(props) => props.theme.invertTextColor};
    }
  }
`;

const About = () => {
  const stickerName = "html";
  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });
  return (
    <ModalWindow
      width={isDesktop ? "500px" : "100%"}
      windowName="About"
      defaultPosition={{ x: 350, y: 50 }}
      isDesktop={isDesktop}
    >
      <ContentBox isDesktop={isDesktop}>
        <Keyword>
          <li>responsibility</li>
          <li>persistent</li>
          <li>sensitive</li>
          <li>creative</li>
          <li>cooperative</li>
        </Keyword>
        <AboutText>
          <p>
            디자인과 회화를 배우며 우리 주변에 있는 것들을 재구성하고 다시
            조립하면서 알게된 것 중 한가지는 세상의 많은 것들이 여러 번의
            정리정돈과 수정하는 과정을 통해 제 아야기를 꾸리고, 그 안에서 그
            자신만의 독창성을 지니게 된다는 것이었습니다.
          </p>
          <p>
            탄생한 지 얼마 되지 않은 행성들이 항성 근처에 편입하게 되는 과정에서
            으레 그렇듯, 많은 것들이 항성 근처에 중력으로 묶이며 항성과 너무
            가까워져 흡수되어버리기도 하고, 다른 행성들과 부딪혀 없어지기도
            하지만, 이 과정을 지나고 나면 행성은 항성을 중심으로 궤도를 그리며
            그 자신의 세상을 꾸리고는 합니다. 핵분열과 대기순환 등을 통해, 또
            자신만의 위성을 거느리기도 하면서.
          </p>
          <p>
            이와 같이, 저의 많은 작업과 시도들은 '나'라는 존재 주변에 편입하기
            위해 깎여 나가기도 하고 다른 것들과 부딪혀 깨지고 사라지기도 하지만,
            결국 안정적으로 궤도에 오르게 되는 것들은 '나'를 중심으로 원을
            그리며 그 개개의 세상을 그려나갑니다. 여러 번의 '수정' 이라는 과정을
            통해서. 이렇게 저와 작업물들은 끊임없이 변화하며 더 나은 모습을
            꾀하고 있습니다.
          </p>
        </AboutText>
        <SelectWrap>
          <Select>
            <h2>Contact</h2>
            <p>
              <a href="mailto:deerinmymind@gmail.com">deerinmymind@gmail.com</a>
            </p>
          </Select>

          <Select>
            <h2>Notion Resume</h2>
            <a
              href="https://respected-honey-7eb.notion.site/8f80be93ee194cff9a99b188a1c6651f?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="imageWrap">
                <img src="assets/skill/notion.png" alt="" />
              </div>
            </a>
          </Select>
        </SelectWrap>
      </ContentBox>
      <Sticker
        name={stickerName}
        width={100}
        defaultPosition={{ x: 20, y: 250 }}
      />
    </ModalWindow>
  );
};

export default About;
