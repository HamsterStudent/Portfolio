import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import { Cute, Hamster } from "./CodingPosts/PostList";
import ModalWindow from "../Components/ModalWindow";
import { useSetRecoilState } from "recoil";
import { windowDisplayAtom } from "../recoil/atom";

const CodingWrap = styled.section`
  font-size: 14px;
  border: solid 1px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 22px;
    padding: 10px 0;
    border-bottom: solid 1px;
  }
  p {
    margin: 10px 0;
  }
`;
const CardWrap = styled.ul`
  height: 500px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
const Card = styled.li`
  width: 48.6%;
  background-color: antiquewhite;
  padding: 10px;
  margin-bottom: 10px;
`;

const ImageWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  img {
    width: 100%;
    object-fit: contain;
    border: solid 1px;
    box-sizing: content-box;
  }
`;

const Coding = () => {
  const [temp, setTemp] = useState(false);
  const setIsDisplay = useSetRecoilState(windowDisplayAtom);
  return (
    <ModalWindow
      width={400}
      windowName="Coding"
      defaultPosition={{ x: 350, y: 10 }}
    >
      <CodingWrap>
        <CardWrap>
          <Card>
            <ImageWrap>
              <img src="https://huchu.link/FihXTqD" alt="" />
            </ImageWrap>
            <div>
              <h2>title</h2>
              <div>see more</div>
            </div>
          </Card>
          <Card>
            <ImageWrap>
              <img src="https://huchu.link/MAZKzk3" alt="" />
            </ImageWrap>
            <div>
              <h2>title</h2>
              <div>
                <button
                  onClick={() => {
                    setIsDisplay((cur) => {
                      return { ...cur, ProdList: true };
                    });
                  }}
                >
                  JS
                </button>
                {temp ? <MarkdownRenderer>{Hamster}</MarkdownRenderer> : null}
                <button>CSS</button>
              </div>
            </div>
          </Card>
          <Card>
            <ImageWrap>
              <img src="https://huchu.link/MVUT0fY" alt="" />
            </ImageWrap>
            <div>
              <h2>title</h2>
              <div>see more</div>
            </div>
          </Card>
          <Card>
            <ImageWrap>
              <img src="https://huchu.link/IFh5Kto" alt="" />
            </ImageWrap>
            <div>
              <h2>title</h2>
              <div>see more</div>
            </div>
          </Card>
          <Card>
            <ImageWrap>
              <img src="https://huchu.link/IFh5Kto" alt="" />
            </ImageWrap>
            <div>
              <h2>title</h2>
              <div>see more</div>
            </div>
          </Card>
        </CardWrap>
      </CodingWrap>
    </ModalWindow>
  );
};

export default Coding;
