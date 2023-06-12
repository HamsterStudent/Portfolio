import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Container, Bar } from "./pages.style";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";

import { highestZIndexAtom } from "../atom";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  limit,
  startAfter,
  getDocs,
} from "firebase/firestore";
import { dbService } from "../firebase";

const ContentWrap = styled.section`
  padding: 20px;
`;

const InputWrap = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const IconButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  border: solid 1px;
`;

const EmojiBox = styled.div`
  position: fixed;
  top: 80px;
  left: 20px;
`;

const FormBox = styled.form`
  display: inline;
  input {
    background-color: transparent;
    border: solid 1px;
    height: 30px;
    border-radius: 15px;
    margin-left: 10px;
  }
`;

const GuestMemo = styled.div`
  border: solid 1px;
  margin-bottom: 10px;
  padding: 10px 5px;
  p {
    font-size: 14px;
  }
`;
const GuestText = styled.div`
  /* background-color: azure; */
  display: flex;
  align-items: center;
  font-size: 16px;
  div {
    font-size: 22px;
    margin-right: 10px;
  }
`;

function Guestbook() {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const [showEmojis, setShowEmojis] = useState(false);
  const [emojiIcon, setEmojiIcon] = useState("");
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState<any>([]);
  useEffect(() => {
    const qu = query(
      collection(dbService, "memos"),
      orderBy("createdAt", "desc"),
      limit(5),
    );
    onSnapshot(qu, (snapshot) => {
      const memoArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(memoArr);
      setMemos(memoArr);
    });
    setZIndex(highestZIndex);

    // pagenation
    async function page() {
      const documentSnapshots = await getDocs(qu);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      console.log("last", lastVisible);
      const next = query(
        collection(dbService, "memos"),
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(5),
      );
      console.log(next);
    }
    page();
  }, []);
  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "memos"), {
        memo,
        createdAt: serverTimestamp(),
        emojiIcon,
      });
      console.log("written :", docRef.id);
    } catch (error) {
      console.error("error : ", error);
    }
    setEmojiIcon("");
    setMemo("");
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(value);
  };

  return (
    <Draggable
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: 30, y: 150 }}
    >
      <Container windowWidth={`${400}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">bar</Bar>
        <ContentWrap>
          <InputWrap>
            <IconButton onClick={() => setShowEmojis(!showEmojis)}>
              {emojiIcon ? emojiIcon : "+"}
            </IconButton>
            {showEmojis && (
              <EmojiBox>
                <EmojiPicker
                  height={400}
                  width={300}
                  onEmojiClick={(e) => {
                    setEmojiIcon(e.emoji);
                    setShowEmojis(false);
                  }}
                />
              </EmojiBox>
            )}
            <FormBox onSubmit={onSubmit}>
              <input
                type="text"
                value={memo}
                onChange={onChange}
                placeholder="What's on your mind?"
                maxLength={120}
              />
              <input type="submit" value="memo" />
            </FormBox>
          </InputWrap>

          {memos.map((eachMemo: any) => (
            <GuestMemo key={eachMemo.id}>
              {/* <p>{eachMemo.createdAt.toDate().toISOString()}</p> */}
              <GuestText>
                <div>{eachMemo.emojiIcon}</div>
                <p>{eachMemo.memo}</p>
              </GuestText>
            </GuestMemo>
          ))}
        </ContentWrap>
      </Container>
    </Draggable>
  );
}

export default Guestbook;
